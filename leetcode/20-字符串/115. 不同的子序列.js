/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    const m = s.length
    const n = t.length
    const dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0))
    // dp[i][j] i 代表 s , j 代表 t
    // 当 j = 0 时，t 皆为 s 的子序列
    // dp.unshift(new Array(n+1).fill(1))
    for (let c = 0; c <= m; c++) {
        dp[c][0] = 1
    }
    //当s[i-1] == t[j-1]：
    //1.用s[i - 1]来匹配 dp[i][j] = dp[i-1][j-1]
    //2.不用s[i - 1]来匹配 dp[i][j] = dp[i-1][j]
    //当s[i-1] != t[j-1]：不能用s[i-1]来匹配,s[i - 1]匹配不了t[j-1]，所以dp[i][j] = dp[i-1][j]
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    return dp[m][n]
};