/**
 * @param {number} x
 * @return {number}
 */

// 时间O(logn) 空间O(1)
var mySqrt = function (x) {
    let left = 1
    let right = x
    while (left <= right) {
        const sqrt = parseInt((left + right) / 2)
        if (sqrt * sqrt <= x) {
            if (x < (sqrt + 1) * (sqrt + 1)) {
                return sqrt
            } else {
                left = sqrt + 1
            }
        } else {
            right = sqrt - 1
        }
    }
    return right
};