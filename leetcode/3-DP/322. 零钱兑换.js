/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// 思路：dp[i]表示兑换面额i所需要的最少硬币，
// 因为硬币无限，所以可以自底向上计算dp[i]，
// 对于dp[0~i]的每个状态，循环coins数组，寻找可以兑换的组合，
// 用i面额减去当前硬币价值，dp[i-coin]在加上一个硬币数就是dp[i],
// 最后取最小值就是答案，
// 状态转移方程就是dp[i] = Math.min(dp[i], dp[i - coin] + 1);
// 时间O(sn) 空间O(n)
var coinChange = function (coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 0; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};