/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const need = {} // t中需要的字符
    const window = {}// 窗口中有的字符
    for (const c of t) {// 统计单个字母数量
        need[c] = (need[c] || 0) + 1
    }

    let left = 0
    let right = 0
    let len = Infinity
    let kind = 0// 窗口中满足need单个字符数的种类
    let pos = 0//最小子串的起始索引

    while (right < s.length) {
        const c = s[right++]//字符入队
        if (need[c]) { // c是被需要的字符，更新window的字符数
            window[c] = (window[c] || 0) + 1
            if (window[c] == need[c]) {//更新达标的字符数
                kind++
            }
        }
        while (kind == Object.keys(need).length) {//字符种类与需要的字符个数一致时，就收缩窗口
            if (right - left < len) {//更新最小子串长度和起始索引
                len = right - left
                pos = left
            }
            const d = s[left++]//出队
            if (need[d]) {//出队的字符如果也是need中的字符，更新达标的字符数
                if (window[d] == need[d]) {
                    kind--
                }
                window[d]--
            }
        }
    }
    return len == Infinity ? "" : s.substr(pos, len)
};