/**
 * @param {number[]} nums
 * @return {number}
 */

// 思路：题意nums[-1]、nums[n]都是-∞。所以数组中只要存在两个相邻元素是递增的，那沿着它一定可以找到峰值
// 时间O(logn) 空间O(1)
var findPeakElement = function (nums) {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        const mid = parseInt((left + right) / 2)
        if (nums[mid + 1] >= nums[mid]) {//上升，peak在mid右边
            left = mid + 1
        } else {//下降，peak在mid左边
            right = mid
        }
    }
    return left
};