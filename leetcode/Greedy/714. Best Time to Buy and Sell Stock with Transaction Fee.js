/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    let profit = 0
    if (prices.length <= 1) {
        return 0
    }
    let buy = prices[0] + fee
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] + fee < buy) { //当前价格比买入价格低，放弃上次，重新买入
            buy = prices[i] + fee
        } else if (prices[i] > buy) { //当前价格比买入价低，可以考虑卖出也可继续持有
            profit += prices[i] - buy //当前卖出的利润
            buy = prices[i] // 当你卖出的时候即等于以当前卖出价格买入新股票，更新成本价
        }
    }
    return profit
};