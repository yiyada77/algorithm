/**
 * @param {number} n
 * @return {number}
 */

// 当 i>=2 时，假设对正整数 i 拆分出的第一个正整数是 j（1 <= j < i），则有以下两种方案：
// 将 i 拆分成 j 和 i-j 的和，且 i-j 不再拆分成多个正整数，此时的乘积是 j * (i-j)；
// 将 i 拆分成 j 和 i-j 的和，且 i−j 继续拆分成多个正整数，此时的乘积是 j * dp[i-j]。
// 时间O(n^2) 空间(n)
var integerBreak = function (n) {
    const dp = new Array(n + 1).fill(0) //dp[i]为正整数i拆分之后的最大乘积
    dp[2] = 1
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])
        }
    }
    return dp[n]
};