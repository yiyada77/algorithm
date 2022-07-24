/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 时间O(n) 空间O(1)
var sortArrayByParity = function (nums) {
    let even = 0
    let odd = nums.length - 1
    while (even < odd) {
        while (even < odd && nums[even] % 2 === 0) {
            even++
        }
        while (even < odd && nums[odd] % 2 === 1) {
            odd--
        }
        [nums[even], nums[odd]] = [nums[odd], nums[even]]
    }
    return nums
};