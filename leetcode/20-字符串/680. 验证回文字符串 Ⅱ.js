/**
 * @param {string} s
 * @return {boolean}
 */

// 时间O(n) 空间O(1)
var validPalindrome = function (s) {
    let l = 0
    let r = s.length - 1
    while (l < r) {
        if (s[l] !== s[r]) { // 左右指针不一样 还有一次机会，左指针向前一步或者右指针向后一步继续验证
            return helper(s, l + 1, r) || helper(s, l, r - 1)
        }
        l++
        r--
    }
    return true
};

function helper(str, l, r) {
    while (l < r) { // 对撞指针不断判断两边的数字是否相等
        if (str[l] !== str[r]) {
            return false
        }
        l++
        r--
    }
    return true
}