/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 时间O(logn) 空间O(1)
var search = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        const mid = parseInt((left + right) / 2)
        const cur = nums[mid]
        if (cur == target) {
            return mid
        } else if (cur < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
};