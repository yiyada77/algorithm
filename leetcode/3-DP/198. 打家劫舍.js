/**
 * @param {number[]} nums
 * @return {number}
 */

// 时间O(n) 空间O(n)
var rob = function (nums) {
    const n = nums.length
    const dp = [nums[0], Math.max(nums[0], nums[1])]
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[n - 1]
};