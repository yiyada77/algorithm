/**
 * @param {number} n
 * @return {number[]}
 */

// 时间O(nk) 空间O(1)
var countBits = function (n) {
    const countOne = (n) => {
        let count = 0
        while (n) {
            n &= n - 1
            count++
        }
        return count
    }
    const res = []
    for (let i = 0; i <= n; i++) {
        res.push(countOne(i))
    }
    return res
};

// dp
// 思路：bits[i]表示i的二进制中1的个数，那么bits[i-1]就是bits[i]拿掉一个1之后的值，i & (i - 1)就是去掉最低位的一个1.
// 所以状态转移方程就是bits[i] = bits[i & (i - 1)] + 1，不断循环计算出从1-n中每个数二进制中1的个数即可
// 复杂度：时间复杂度O(n)。空间复杂度是O(1)
var countBits = function (n) {
    const bits = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        bits[i] = bits[i & (i - 1)] + 1;
    }
    return bits;
};