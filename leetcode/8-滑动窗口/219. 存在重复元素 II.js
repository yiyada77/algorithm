/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// 循环数组，不断将元素加入滑动窗口中，也就是加入set，
// 如果set中存在重复元素并且窗口大小小于指定大小就返回，
// 否则加入set中，当滑动窗口超过了指定大小，缩小窗口
// 时间O(n) 空间O(k)
var containsNearbyDuplicate = function (nums, k) {
    const len = nums.length
    if (len == 1) return false // i!=j

    const window = new Set()
    for (let i = 0; i < len; i++) {
        if (window.has(nums[i])) {
            return true
        }
        window.add(nums[i])
        if (window.size >= k) {
            window.delete(nums[i - k])
        }
    }
    return false
};