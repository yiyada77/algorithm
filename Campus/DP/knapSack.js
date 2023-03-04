// 有M个物品，每个物品的重量为W[i]，每个物品的价值为V[i]。
// 现在有一个背包，它所能容纳的重量为N
function zeroOneBag(W, V, N) {
    M = W.length;
    let i, j;
    let dp = new Array(N).fill(0);
    for (i = 0; i < M; i++) {
        for (j = N - 1; j >= W[i]; j--) {
            dp[j] = Math.max(dp[j], V[i] + dp[j - W[i]]);
        }
    }
    return dp[N - 1];
}