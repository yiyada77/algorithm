/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.inserStack = [];
    this.transStack = [];
    this.size = 0;
    this.pek;
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    if (this.size === 0) {
        this.pek = x;
    }
    this.inserStack.push(x);
    this.size++;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    while (this.inserStack.length > 0) {
        this.transStack.push(this.inserStack.pop());
    }
    let res = this.transStack.pop();
    while (this.transStack.length > 0) {
        this.inserStack.push(this.transStack.pop());
    }
    this.pek = this.inserStack[0];
    this.size--;
    return res;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.pek;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    let res = this.size === 0 ? true : false;
    return res;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */