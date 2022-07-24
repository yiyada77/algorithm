/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
/**
 * 思路：注意子序列可以不连续

    状态定义：dp[i][j]表示 text1[0:i-1] 和 text2[0:j-1] 的最长公共子序列，注意是闭区间，之所以是到i-1或j-1，是方便初始化dp数组，当i=0或者j=0的时候表示的就是空字符和另一个字符串匹配，此时的dp[i][j]=0

    状态转移方程：当text1[i - 1] == text2[j - 1]时：dp[i][j] = dp[i - 1][j - 1] + 1

    当text1[i - 1] != text2[j - 1]时：dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);

    dp的初始化：当 i = 0 时：dp[0][j]=0

    当 j = 0 时：dp[i][0]=0

    返回结果：dp[len(text1)][len(text2)]

    复杂度：时间复杂度O(mn)，空间复杂度O(mn)
 */
var longestCommonSubsequence = function (text1, text2) {
    const m = text1.length
    const n = text2.length
    const dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0))
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[m][n]
};