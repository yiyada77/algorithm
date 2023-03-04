var maxProfit = function (prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    if (prices.length < 2) {
        return 0;
    }
    for (let i = 1; i < prices.length; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }
    return maxProfit;
};