/**
 * @param {string} s
 * @return {string[]}
 */

// 思路：用map存储子串出现的次数，循环dna序列，每次截取长度为10的子串，加入map中 并更新出现的次数，次数超过2，加入ans
// 复杂度：时间复杂度O(n)，n是字符串的长度。空间复杂度O(n)
var findRepeatedDnaSequences = function (s) {
    const L = 10
    const map = new Map()
    for (let i = 0; i <= s.length - L; i++) {
        const subStr = s.slice(i, i + L)
        map.set(subStr, (map.get(subStr) || 0) + 1)
    }
    const res = []
    for (let [str, time] of map.entries()) {
        if (time >= 2) {
            res.push(str)
        }
    }
    return res
};