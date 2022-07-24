/**
 * @param {string} s
 * @return {number}
 */
// 时间O(n) 空间O(n)
var longestValidParentheses = function (s) {
    let maxLen = 0
    let stack = [-1] // 空栈的时候，栈顶下标
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') { // ( 入栈
            stack.push(i)
        } else { // ) 出栈
            stack.pop()
            // 每次出栈计算当前有效连续长度
            // 当前位置 - 栈顶下标
            if (stack.length) {
                maxLen = Math.max(i - stack.at(-1), maxLen)
            } else { // 栈为空时，放入右括号参照物，表示从这个下标开始，需要重新计算长度
                stack.push(i)
            }
        }
    }
    return maxLen
};