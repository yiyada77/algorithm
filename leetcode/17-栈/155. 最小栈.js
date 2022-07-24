/**
 * 思路：定义两个栈stack和min_stack，stack正常push，min_stack只会push需要入栈和栈顶中较小的元素。
 * getMin返回min_stack栈顶元素，top返回stack栈顶元素。
 * 复杂度：所有操作的时间复杂度是O(1)
 */

var MinStack = function () {
    this.stack = []
    this.minStack = [Infinity] // 不要忘记给最小栈赋初值
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val)
    const minStackTop = this.minStack[this.minStack.length - 1]
    this.minStack.push(Math.min(minStackTop, val))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()
    this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1]
};