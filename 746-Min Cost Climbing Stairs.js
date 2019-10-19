var minCostClimbingStairs = function (cost) {
    let len = cost.length;
    let dp = new Array(len);

    for (let i = 0; i < len; i++) {
        if (i < 2) {
            dp[i] = cost[i];
        } else {
            dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
        }
    }
    return Math.min(dp[len - 1], dp[len - 2]);
};