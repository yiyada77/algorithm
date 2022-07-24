/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

// 时间O(n) 空间O(n)
var validateStackSequences = function (pushed, popped) {
    const stack = [] // 用栈模拟出栈入栈的过程
    let index = 0
    for (let i = 0; i < pushed.length; i++) {
        stack.push(pushed[i])
        // 当popped中index指向的位置的元素和stack栈顶的元素一致时，出栈 并且 index++
        while (popped[index] !== undefined && popped[index] === stack[stack.length - 1]) {
            stack.pop()
            index++
        }
    }
    return stack.length == 0
};