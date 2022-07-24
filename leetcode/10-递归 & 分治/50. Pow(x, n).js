/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// 递归
// 时间O(logn)，n是进行二进制拆分的时间复杂度，空间(logn)，n为递归深度
var myPow = function (x, n) {
    if (n < 0) return 1 / myPow(x, -n) // n<0时，x的n次方等于1除以x的-n次方
    if (n == 0) return 1 // n=0直接返回1
    if (n % 2) {//奇数
        return x * myPow(x, n - 1) // n是奇数时，x的n次方=x*x的n-1次方
    } else {
        return myPow(x * x, n / 2) // n是偶数，使用分治，一分为二，等于x*x的n/2次方 
    }
};

// 二进制
// 对n的二进制不断右移动，判断n的二进制最后一位是否是1，如果是1则将结果乘以x。
var myPow = function (x, n) {
    if (n < 0) {
        x = 1 / x
        n = -n
    }
    let res = 1
    while (n) {
        if (n & 1) {//最后一位为1
            res *= x
        }
        x *= x
        n >>>= 1
    }
    return res
};