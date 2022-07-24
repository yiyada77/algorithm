/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 思路：不用考虑每一步跳跃到那个位置，而是尽可能的跳跃到最远的位置，
// 看最多能覆盖的位置，不断更新能覆盖的距离。
// 时间O(n) 空间O(1)
var canJump = function (nums) {
    const n = nums.length
    if (n === 1) {
        return true
    }

    let cover = nums[0]//能覆盖的最远距离
    for (let i = 0; i <= cover; i++) {
        cover = Math.max(cover, i + nums[i])
        if (cover >= n - 1) {//覆盖距离超过或等于nums.length - 1 说明能到达终点
            return true
        }
    }
    return false
};

// dp
// 思路：dp[i]表示能否到达位置i，对每个位置i判断能否通过前面的位置跳跃过来，当前位置j能达到，并且当前位置j加上能到达的位置如果超过了i，那dp[i]更新为ture，便是i位置也可以到达。
// 复杂度：时间复杂度O(n^2)，空间复杂度O(n)
var canJump = function (nums) {
    const n = nums.length
    if (n === 1) {
        return true
    }
    const dp = new Array(n).fill(false)
    dp[0] = true //第一项能到达
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && j + nums[j] >= i) {
                //当前位置j能达到，并且当前位置j加上能到达的位置如果超过了i，那dp[i]更新为ture，便是i位置也可以到达
                dp[i] = true
                break
            }
        }
    }
    return dp[n - 1]
};