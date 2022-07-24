/**
 * @param {number[]} prices
 * @return {number}
 */

// 限定交易次数 k=1
// 时间O(n) 空间O(1)
var maxProfit = function (prices) {
    let n = prices.length
    const dp = new Array(2)
    dp[0] = 0
    dp[1] = -prices[0]
    for (let i = 1; i < n; i++) {
        dp[0] = Math.max(dp[0], dp[1] + prices[i])
        dp[1] = Math.max(dp[1], -prices[i])
    }
    return dp[0]
};

//语义化
var maxProfit = function (prices) {
    let n = prices.length
    let buy = -prices[0]
    let sell = 0
    for (let i = 1; i < n; i++) {
        sell = Math.max(sell, buy + prices[i])
        buy = Math.max(buy, -prices[i])
    }
    return sell
};