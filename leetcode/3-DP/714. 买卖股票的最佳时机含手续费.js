/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */

// 每次交易要支付手续费 我们定义在卖出的时候扣手续费
// dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee)
// dp[i][1] = max(dp[i - 1][1], dp[i - 1][0] - prices[i])
// 时间O(n) 空间O(1)
var maxProfit = function (prices, fee) {
    const n = prices.length
    const dp = [0, -prices[0]]
    for (let i = 1; i < n; i++) {
        dp[0] = Math.max(dp[0], dp[1] + prices[i] - fee)//比较前一天也没有dp[0],前一天有dp[1]今天卖出+prices[i]-fee
        dp[1] = Math.max(dp[1], dp[0] - prices[i])//比较前一天有dp[1],前一天没有dp[0]今天买入-prices[i]
    }
    return dp[0]
};