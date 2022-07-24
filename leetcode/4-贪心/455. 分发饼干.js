/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

// 思路：大尺寸的饼干既可以满足胃口大的孩子也可以满足胃口小的孩子，那么就应该优先满足胃口大的。
// 排序两个数组，从右到左遍历，用大饼干首先满足胃口大的小孩
// 时间复杂度O(mlogm + nlogn)。空间复杂度O(logm + logn)
var findContentChildren = function (g, s) {
    g = g.sort((a, b) => b - a)//kid
    s = s.sort((a, b) => b - a)//cookie
    let count = 0
    let cookie = 0
    for (const kid of g) {
        if (s[cookie] >= kid) {
            cookie++
            count++
        }
    }
    return count
};