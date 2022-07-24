/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const arr = s.split(' ')
    return arr.map(word => word.split('').reverse().join('')).join(' ')
};