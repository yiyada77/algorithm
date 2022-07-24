/**
 * @param {number} n
 * @return {boolean}
 */

// 思路：一个数是2的幂需要满足这个数的二进制中只有一个1，
// 也就是需要满足这个数>0，同时消除唯一的一个1之后就是0
// 复杂度：时间复杂度O(1)。空间复杂度O(1)
var isPowerOfTwo = function (n) {
    return n > 0 && (n & (n - 1)) === 0
};