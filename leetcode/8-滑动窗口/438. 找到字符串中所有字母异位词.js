/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const need = {} // p中需要的字符
    const window = {} // 窗口中有的字符
    for (const c of p) { // 统计异位词单个字母数量
        need[c] = (need[c] || 0) + 1
    }

    let left = 0 // 左右指针
    let right = 0
    let kind = 0 // 窗口中满足need单个字符数的种类
    const res = []

    while (right < s.length) {
        const c = s[right++]//字符进入队
        if (need[c]) { // c是被需要的字符，更新window的字符数
            window[c] = (window[c] || 0) + 1
            if (window[c] == need[c]) {//更新达标的字符数
                kind++
            }
        }
        while (right - left >= p.length) {//出队
            if (kind == Object.keys(need).length) {//window中的字符是否满足异位词定义
                res.push(left)
            }
            const d = s[left++]//出队的字符如果也是need中的字符，更新达标的字符数
            if (need[d]) {
                if (window[d] == need[d]) {
                    kind--
                }
                window[d]--
            }
        }
    }
    return res
};