def longestCommonPrefix(self, strs: List[str]) -> str:
    first = strs.pop(0)
    resList = []
    for i in range(len(first)):
        count = 0
        for word in strs:
            if i + 1 > len(word):
                break
            if first[i] == word[i]:
                count += 1
        if count == len(strs):
            resList.append(first[i])
        else:
            break

    return ''.join(resList)
