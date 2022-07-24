/**
 * @param {number} n
 * @return {number}
 */

// 思路：dp[i] 表示i的完全平方和的最少数量，
// dp[i - j * j] + 1表示减去一个完全平方数j的完全平方之后的数量加1就等于dp[i]，
// 只要在dp[i], dp[i - j * j] + 1中寻找一个较少的就是最后dp[i]的值。
// 时间O(n*sqrt(n)) n是输入的整数，需要循环n次，每次计算dp方程的复杂度sqrt(n)，
// 空间O(n)
var numSquares = function (n) {
    const dp = new Array(n + 1).fill(0)

    for (let i = 1; i <= n; i++) {
        dp[i] = i//最差的情况就是每次+1 i=1+1+1+1+...+1
        for (let j = 1; i - j * j >= 0; j++) {//枚举前一个状态
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1)//状态转移方程
        }
    }
    return dp[n]
};