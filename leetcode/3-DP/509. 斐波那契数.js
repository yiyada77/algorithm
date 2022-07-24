/**
 * @param {number} n
 * @return {number}
 */

// 暴力递归
// 斐波那契数：递归法求斐波那契数，总共递归了n层，二叉树的高度是n，由我们的基础知识可以知道，
// 一个高度为n的二叉树最多可以有 2^n - 1 个节点，也就是递归过程函数调用的次数，所以时间复杂度为 O(2^n)。
var fib = function (n) {
    if (n <= 1) return n
    return fib(n - 1) + fib(n - 2)
};

// dp 时间O(n) 空间O(n)
var fib = function (n) {
    if (n <= 1) return n
    const dp = [0, 1]
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};

// 滚动数组优化 时间O(n) 空间O(1)
var fib = function (n) {
    if (n <= 1) return n
    const dp = [0, 1]
    for (let i = 2; i <= n; i++) {
        const sum = dp[0] + dp[1]
        dp[0] = dp[1]
        dp[1] = sum
    }
    return dp[1]
};