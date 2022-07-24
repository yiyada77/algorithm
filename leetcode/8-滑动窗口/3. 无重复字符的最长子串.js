/**
 * @param {string} s
 * @return {number}
 */

// 思路：滑动窗口不断向前，当前元素不在set中 就加入set 
// 然后更新最大长度，i++继续下一轮循环，
// set中有重复元素不断让j++ 并删除窗口之外的元素 
// 直到滑动窗口内没有重复的元素
// 时间O(n)s长度，空间O(n)s长度
var lengthOfLongestSubstring = function (s) {
    const len = s.length
    if (len == 0) return 0
    let i = 0 // 滑动窗口右边界
    let j = 0 // 滑动窗口左边界
    const window = new Set()
    let maxLen = 0
    for (i; i < len; i++) {
        if (!window.has(s[i])) {
            //滑动窗口没有s[i]，加入，更新最大长度
            window.add(s[i])
            maxLen = Math.max(maxLen, window.size)
        } else {
            //窗口已存在s[i]，缩小窗口左边界，直到排除上一个s[i]
            while (window.has(s[i])) {
                window.delete(s[j])
                j++
            }
            window.add(s[i])//向窗口添加当前s[i]
        }
    }
    return maxLen
};