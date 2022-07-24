/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// 思路：滑动窗口遍历字符串，不断更新最大元音个数
// 时间O(n) 空间O(1)
var maxVowels = function (s, k) {
    const window = new Set(['a', 'e', 'i', 'o', 'u'])
    let count = 0
    let l = 0
    let r = 0
    while (r < k) {//初始化窗口宽度
        window.has(s[r]) && count++
        r++
    }
    let max = count
    while (r < s.length) {
        window.has(s[r]) && count++//即将进入窗口的是元音，count++
        window.has(s[l]) && count--//即将离开窗口的是元音，count--
        r++
        l++
        max = Math.max(max, count)//更新最值
    }
    return max
};