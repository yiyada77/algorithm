/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*
    双指针
    思路：双指针从右往左循环，每次循环两个字符处理掉#，直到第一个字符是右边退格全部处理掉之后的字符，然后看这两个字符是否一致
    复杂度：时间复杂度O(m+n)，m、n是两个字符串的长度。空间复杂度O(1)
 */
var backspaceCompare = function (s, t) {
    let i = s.length - 1,
        j = t.length - 1,
        skipS = 0
    skipT = 0
    while (i >= 0 || j >= 0) {
        while (i >= 0) {
            if (s[i] === '#') {
                skipS++
                i--
            } else if (skipS > 0) {
                skipS--
                i--
            } else break
        }
        while (j >= 0) {
            if (t[j] === '#') {
                skipT++
                j--
            } else if (skipT > 0) {
                skipT--
                j--
            } else break
        }
        if (s[i] !== t[j]) return false
        i--
        j--
    }
    return true
};
