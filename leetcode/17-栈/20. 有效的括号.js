/**
 * @param {string} s
 * @return {boolean}
 */

// 时间O(n) 空间O(n)
var isValid = function (s) {
    if (s.length % 2 == 1) { // 奇数个括号
        return false
    }
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    const stack = []
    for (let i of s) {
        if (i in map) { // 右括号，跟栈顶元素配对
            if (stack.length && stack.pop() == map[i]) {
                continue
            } else {
                return false
            }
        } else { // 左括号入栈
            stack.push(i)
        }
    }
    return stack.length == 0
};