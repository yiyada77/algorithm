/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let low = 1
    let high = n
    while (low < high) {
        const mid = parseInt((low + high) / 2)
        if (guess(mid) <= 0) {
            high = mid
        } else {
            low = mid + 1
        }
    }
    return high
};