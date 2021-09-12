/**
 * Initialize your data structure here.
 */
var MyStack = function () {
    this.insertQueue = [];
    this.transQueue = [];
    this.size = 0;
    this.topE;
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.insertQueue.push(x);
    this.topE = x;
    this.size++;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
    while (this.insertQueue.length > 1) {
        this.transQueue.push(this.insertQueue.shift());
    }
    let res = this.insertQueue.pop();
    while (this.transQueue.length > 0) {
        this.insertQueue.push(this.transQueue.shift());
    }
    this.size--;
    this.topE = this.insertQueue[this.size - 1];
    return res;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.topE;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.size === 0 ? true : false;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */