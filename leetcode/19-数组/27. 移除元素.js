/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 时间O(n) 空间O(1)
var removeElement = function (nums, val) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) { // = 是考虑nums只有一个元素的情况
        if (nums[left] == val) {
            nums[left] = nums[right--]
            // right--
        } else {
            left++
        }
    }
    return left
};