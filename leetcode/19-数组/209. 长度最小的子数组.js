/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// 时间O(n) 空间O(1)
var minSubArrayLen = function (target, nums) {
    let res = nums.length + 1 // 连续子数组最长为数组长度，所以给初始值为数组长度+1
    let l = r = sum = 0
    while (r < nums.length) {
        sum += nums[r++] // 扩大窗口
        while (sum >= target) {
            res = res > r - l ? r - l : res // 更新最小值
            sum -= nums[l++] // 缩小窗口
        }
    }
    return res > nums.length ? 0 : res
};