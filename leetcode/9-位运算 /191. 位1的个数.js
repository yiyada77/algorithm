/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// 思路： n & (n - 1) 这个操作的原理。我们发现只要每次执行这个操作，就会消除掉 n 的二进制中 最后一个出现的 1。
// 因此执行 n & (n - 1) 使得 n 变成 0 的操作次数，就是 n 的二进制中 1 的个数。
// 时间O(n) 空间O(1)
var hammingWeight = function (n) {
    let count = 0
    while (n) {
        n = n & (n - 1)
        count++
    }
    return count
};