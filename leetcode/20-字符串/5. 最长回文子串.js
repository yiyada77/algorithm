/**
 * @param {string} s
 * @return {string}
 */

// 时间O(n^2) 空间O(n^2)
var longestPalindrome = function (s) {
    let n = s.length
    let res = ''
    let dp = Array.from(new Array(n), () => new Array(n).fill(false))
    for (let left = n - 1; left >= 0; left--) {
        for (let right = left; right < n; right++) {
            dp[left][right] = (s[left] === s[right]) && (right - left < 2 || dp[left + 1][right - 1])
            if (dp[left][right] && (right - left + 1 > res.length)) {
                res = s.substring(left, right + 1)
            }
        }
    }
    return res
};