/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
    this.minValue;
    this.topEle;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    if (this.stack.length === 0 || x < this.minValue) {
        this.minValue = x;
    }
    this.stack.push(x);
    this.topEle = x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop();
    if (this.stack.indexOf(this.minValue) === -1 && this.stack.length > 0) {// not find
        this.minValue = this.stack[0];
        for (let i = 1; i < this.stack.length; i++) {
            if (this.stack[i] < this.minValue) {
                this.minValue = this.stack[i];
            }
        }
    }
    this.topEle = this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.topEle;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minValue;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */