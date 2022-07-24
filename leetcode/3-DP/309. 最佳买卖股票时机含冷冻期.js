/**
 * @param {number[]} prices
 * @return {number}
 */

// 冷却时间1天，所以要从 i - 2 天转移状态
// dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
// dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i])
// 时间O(n) 空间O(1)
var maxProfit = function (prices) {
    const n = prices.length
    let buy = -prices[0]//持有
    let sell = 0//不持有
    let freeze = 0//dp[i-2][0] i-2时的sell
    for (let i = 1; i < n; i++) {
        const temp = sell
        sell = Math.max(sell, buy + prices[i])
        buy = Math.max(buy, freeze - prices[i])
        freeze = temp
    }
    return sell
};