/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let low = 0
    let high = x
    while (low <= high) {
        const root = parseInt((low + high) / 2)
        if (root * root <= x) {
            low = root + 1
        } else {
            high = root - 1
        }
    }
    return high
};