var MyStack = function () {
    this.queue1 = []
    this.queue2 = []
    return this
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift())
    }
    const res = this.queue1.shift()
    while (this.queue2.length > 0) {
        this.queue1.push(this.queue2.shift())
    }
    return res
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift())
    }
    const res = this.queue1.shift()
    this.queue2.push(res)
    while (this.queue2.length > 0) {
        this.queue1.push(this.queue2.shift())
    }
    return res
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.queue1.length + this.queue2.length === 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */