/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 时间O(n) 空间O(s)，s为字符集大小
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    const map = new Array(26).fill(0)
    for (let i of s) {
        map[i.codePointAt(0) - 'a'.codePointAt(0)]++
    }
    for (let j of t) {
        map[j.codePointAt(0) - 'a'.codePointAt(0)]--
        if (map[j.codePointAt(0) - 'a'.codePointAt(0)] < 0) { // 判断 t 中是否出现超出 s 的字符
            return false
        }
    }
    return true
};