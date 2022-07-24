/**
 * @param {string[]} strs
 * @return {string}
 */

// 横向扫描，一一比对
// 时间O(mn) 空间O(1)
var longestCommonPrefix = function (strs) {
    if (strs.length === 1) return strs[0]
    const str = strs[0]
    for (let i = 0; i < str.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== str[i]) {
                return str.substr(0, i)
            }
        }
    }
    return str
};