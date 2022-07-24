/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */

// 限定交易次数 最多次数为 k
// 时间O(nk) 空间O(k)
var maxProfit = function (k, prices) {
    const n = prices.length
    const profit = new Array(k + 1)
    for (let i = 0; i <= k; i++) {//初始化k次交易买入卖出的利润
        profit[i] = {
            buy: -prices[0],//手上有股票
            sell: 0,//手上没股票
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= k; j++) {
            profit[j] = {
                buy: Math.max(profit[j].buy, profit[j - 1].sell - prices[i]),
                sell: Math.max(profit[j].sell, profit[j].buy + prices[i]),
            }
        }
    }
    return profit[k].sell
};