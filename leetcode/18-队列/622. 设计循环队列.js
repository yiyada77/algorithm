/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.list = []
    this.front = 0
    this.rear = 0
    this.max = k
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) {
        return false
    } else {
        this.list[this.rear] = value
        this.rear = (this.rear + 1) % this.max
        return true
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    let v = this.list[this.front]
    this.list[this.front] = undefined
    if (v !== undefined) {
        this.front = (this.front + 1) % this.max
        return true
    } else {
        return false
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    return this.isEmpty() ? -1 : this.list[this.front]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    let rear = this.rear - 1
    if (this.list[rear < 0 ? this.max - 1 : rear] === undefined) {
        return -1
    } else {
        return this.list[rear < 0 ? this.max - 1 : rear]
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.front == this.rear && !this.list[this.front]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.front == this.rear && !!this.list[this.front]
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */