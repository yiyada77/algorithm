/**
 * @param {number[]} height
 * @return {number}
 */

// 思路：用双指针i，j循环height数，i，j对应高度较小的那个先向内移动，不断计算面积，更新最大面积
// 时间O(n) 空间O(1)
var maxArea = function (height) {
    let maxArea = 0
    for (let left = 0, right = height.length - 1; left < right;) {
        const area = Math.min(height[left], height[right]) * (right - left)
        maxArea = Math.max(maxArea, area)
        height[left] < height[right] ? left++ : right--
    }
    return maxArea
};