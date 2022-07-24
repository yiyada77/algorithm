/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const n = prices.length
    if (n <= 1) return 0
    let buy1 = -prices[0] //1买0卖 利润为-price[0]
    let sell1 = 0 //买卖同价，利润为0
    let buy2 = -prices[0] //第一次买卖利润为0，第二次买入利润为-price[0]
    let sell2 = 0 //买卖同价，利润为0

    for (let i = 1; i < n; i++) {
        buy1 = Math.max(-prices[i], buy1)
        sell1 = Math.max(buy1 + prices[i], sell1)
        buy2 = Math.max(sell1 - prices[i], buy2)
        sell2 = Math.max(buy2 + prices[i], sell2)
    }
    return sell2
};