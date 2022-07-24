/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 思路:矩阵从左到右 从上到下满足递增的性质，
// 所以可以把二维数组看成一个一维递增的数组，
// 然后进行二分查找，只需要将一位坐标转换成二维坐标。
// 时间O(lognm) 空间O(1)
var searchMatrix = function (matrix, target) {
    const m = matrix.length
    const n = matrix[0].length
    let left = 0
    let right = n * m - 1
    while (left <= right) {
        const mid = parseInt((left + right) / 2)
        const cur = matrix[parseInt(mid / n)][mid % n]
        if (cur == target) {
            return true
        } else if (cur > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return false
};