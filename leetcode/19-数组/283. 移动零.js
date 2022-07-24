/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 思路：使用双指针，left，right从0出发，遇到非0的数，交换left，right的数的位置，left++
// 时间O(n) 空间O(1)
var moveZeroes = function (nums) {
    let left = 0, right = 0
    while (right < nums.length) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
        }
        right++
    }
};