/**
 * @param {number[]} prices
 * @return {number}
 */

// 思路：因为不限制交易次数，只要今天价格比昨天高，就交易，
// 利润为正累加，最后的和就是最大的利润，注意第一天是没有利润的，
// 这道题之所以可以用贪心是因为局部最优：收集每天的正利润，可以推导出，全局最优：求得最大利润。
// 时间O(n) 空间O(1)
var maxProfit = function (prices) {
    const n = prices.length
    let profit = 0
    for (let i = 1; i < n; i++) {
        profit += Math.max(0, prices[i] - prices[i - 1])
    }
    return profit
};