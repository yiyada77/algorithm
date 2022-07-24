/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// 思路：循环s和t 不断异或 相同元素异或等于0 所以唯一不同的字符最后会留下来
// 时间O(n) 空间(1) 
var findTheDifference = function (s, t) {
    let res = 0
    for (const ch of s) {
        res ^= ch.charCodeAt()
    }
    for (const ch of t) {
        res ^= ch.charCodeAt()
    }
    return String.fromCharCode(res)
};