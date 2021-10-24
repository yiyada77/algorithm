from urllib import request
import re

class Spider():
    url = 'https://www.huya.com/g/dota2'
    root_pattern = '<span class="txt">([\s\S]*?)</li>'
    name_pattern = '<i class="nick" title="([\s\S]*?)">'
    num_pattern = '<i class="js-num">([\s\S]*?)</i>'

    def __fetch_content(self):
        r = request.urlopen(Spider.url)
        htmls = r.read()
        htmls = str(htmls, encoding = "utf-8")
        return htmls

    def __analysis(self, htmls):
        root_html = re.findall(Spider.root_pattern, htmls)
        anchors = []
        for dom in root_html:
            name = re.findall(Spider.name_pattern,dom)
            num = re.findall(Spider.num_pattern,dom)
            anchor = {'name':name,'num':num}
            anchors.append(anchor)
        return anchors

    def __refine(self,anchors):
        l = lambda anchor: {
            'name':anchor['name'][0],
            'number':anchor['num'][0]
        }
        return map(l,anchors)

    def __sort(self, anchors):
        anchors = sorted(anchors, key = self.__sort_seed, reverse = True)
        return anchors

    def __sort_seed(self, anchor):
        r = re.findall('[1-9]\d*\.?\d*', anchor['number'])
        number = float(r[0])
        if '万' in anchor['number']:
            number *= 10000
        return number

    def __show(self, anchors):
        for rank in range(len(anchors)):
            print('rank ' + str(rank+1) + ' : ' + anchors[rank]['name'] + ' | ' + anchors[rank]['number'])

    def go(self):
        htmls = self.__fetch_content()
        anchors = self.__analysis(htmls)
        anchors = list(self.__refine(anchors))
        anchors = self.__sort(anchors)
        self.__show(anchors)
        
spider = Spider()
spider.go()
