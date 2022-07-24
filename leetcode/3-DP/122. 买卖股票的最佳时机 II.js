/**
 * @param {number[]} prices
 * @return {number}
 */

// 交易次数无限制 k = +infinity
// 时间O(n) 空间O(1)
var maxProfit = function (prices) {
    const n = prices.length
    const dp = new Array(2)
    dp[0] = 0//第一天不持有股票
    dp[1] = -prices[0]//第一天持有股票
    for (let i = 1; i < n; i++) {
        dp[0] = Math.max(dp[0], dp[1] + prices[i])
        dp[1] = Math.max(dp[1], dp[0] - prices[i])
    }
    return dp[0]
};