/**
 * @param {number} n
 * @return {number}
 */

// 因为每次可以爬 1 或 2 个台阶，所以到第n阶台阶可以从第n-2或n-1上来，其实就是斐波那契的dp方程
// dp 时间O(n) 空间O(1)
var climbStairs = function (n) {
    if (n <= 2) {
        return n
    }

    let pre = 1
    let cur = 2
    let i = 3
    while (i++ <= n) {
        const res = pre + cur
        pre = cur
        cur = res
    }
    return cur
};