/**
 * @param {number[]} nums
 * @return {number}
 */

// 思路：需要考虑nums[i]有复数的情况，所以需要设置min和max两个比较值
// prevMin = Math.min(prevMin * num[i], prevMax * num[i], nums[i])
// prevMax = Math.max(prevMin * num[i], prevMax * num[i], nums[i])
// 时间O(n) 空间O(1)
var maxProduct = function (nums) {
    let res = nums[0]
    let prevMax = nums[0]
    let prevMin = nums[0]

    for (let i = 1; i < nums.length; i++) {
        const tmp1 = prevMax * nums[i]
        const tmp2 = prevMin * nums[i]
        prevMax = Math.max(tmp1, tmp2, nums[i])
        prevMin = Math.min(tmp1, tmp2, nums[i])
        res = Math.max(res, prevMax)
    }
    return res
};