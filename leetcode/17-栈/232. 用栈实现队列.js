/**
 * 思路：使用栈来模式队列的行为，如果仅仅用一个栈，是一定不行的，
 * 所以需要两个栈一个输入栈，一个输出栈，这里要注意输入栈和输出栈的关系。
 * 在push数据的时候，只要数据放进输入栈就好，但在pop的时候，操作就复杂一些，
 * 输出栈如果为空，就把进栈数据全部导入进来（注意是全部导入），
 * 再从出栈弹出数据，如果输出栈不为空，则直接从出栈弹出数据就可以了。
 * 最后如果进栈和出栈都为空的话，说明模拟的队列为空了。
 * 复杂度分析：push时间复杂度O(1)，pop时间复杂度为O(n) ，因为pop的时候，输出栈为空，则把输入栈所有的元素加入输出栈。
 *           空间复杂度O(n)，两个栈空间
 */
var MyQueue = function () {
    this.stackIn = []
    this.stackOut = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stackIn.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.stackOut.length) {
        return this.stackOut.pop()
    }
    while (this.stackIn.length) {
        this.stackOut.push(this.stackIn.pop())
    }
    return this.stackOut.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    const res = this.pop()
    this.stackOut.push(res)
    return res
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stackIn.length == 0 && this.stackOut.length == 0
};