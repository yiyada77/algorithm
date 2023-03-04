let n = 10;

let dp = [0, 1, 2];
for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
}
console.log(dp[n]);