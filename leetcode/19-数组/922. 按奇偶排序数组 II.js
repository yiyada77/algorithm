/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 时间O(n) 空间O(1)
var sortArrayByParityII = function (nums) {
    const n = nums.length
    let odd = 1
    for (let even = 0; even < n; even += 2) {
        if (nums[even] % 2 === 1) { // 循环偶数位置遇到奇数
            while (nums[odd] % 2 === 1) { // 循环奇数位置跳过奇数
                odd += 2
            }
            [nums[odd], nums[even]] = [nums[even], nums[odd]]
        }
    }
    return nums
};