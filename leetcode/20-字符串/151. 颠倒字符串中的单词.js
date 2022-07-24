/**
 * @param {string} s
 * @return {string}
 */
// 时间O(n) 空间O(n)
var reverseWords = function (s) {
    let arr = s.trim().replace(/\s+/g, ' ').split(' ')
    let i = 0
    let j = arr.length - 1
    for (; i < j; i++, j--) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr.join(' ')
};
var reverseWords = function (s) {
    return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ')
};