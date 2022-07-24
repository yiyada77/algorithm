/**
 * @param {number[][]} points
 * @return {number}
 */

// 思路：区间按照结尾从小到大排序，循环数组，
// 如果后面一个区间的开始大于前一个区间的结尾 就需要新增一支箭。
// 复杂度：时间复杂度O(nlogn)，排序的复杂度O(nlogn)，循环数组的复杂度O(n)。
// 空间复杂度O(logn)，排序栈空间
var findMinArrowShots = function (points) {
    points.sort((a, b) => a[1] - b[1])
    let count = 1
    let end = points[0][1]
    for (const point of points) {
        if (point[0] > end) {
            count++
            end = point[1]
        }
    }
    return count
};