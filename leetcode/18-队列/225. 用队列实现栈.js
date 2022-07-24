var MyStack = function () {
    this.queue1 = []
    this.queue2 = [] // backup
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue1.push(x) // 由于队列是先进先出，queue2是备份队列，为的是在弹出时，保存queue1出栈顶之前的所有元素的顺序
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    if (!this.queue1.length) { // 当queue1为空，把备份队列的值赋给queue1
        [this.queue1, this.queue2] = [this.queue2, this.queue1]
    }
    while (this.queue1.length > 1) { // 弹出queue1除队尾的所有元素
        this.queue2.push(this.queue1.shift())
    }
    return this.queue1.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    const res = this.pop() // 因为模拟的是栈，所以 top() 出的是最后一个元素，再原样push进去，不改变顺序
    this.queue1.push(res)
    return res
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return !this.queue1.length && !this.queue2.length
};


// 使用一个 队列 实现
// 思路：使用一个 队列 实现，入栈的时候直接push进队列就行，出栈的时候将除了最后一个元素外的元素全部加入到队尾。
// 复杂度分析：push的时间复杂度为O(1)，pop的时间复杂度为O(n)，空间复杂度O(n)
var MyStack = function () {
    this.queue = [];
};

MyStack.prototype.push = function (x) {
    this.queue.push(x);
};

MyStack.prototype.pop = function () {
    let size = this.queue.length;
    while (size-- > 1) {//将除了最后一个元素外的元素全部加入到队尾。
        this.queue.push(this.queue.shift());
    }
    return this.queue.shift();
};

MyStack.prototype.top = function () {
    const x = this.pop();//先出栈，然后在加入队列
    this.queue.push(x);
    return x;
};

MyStack.prototype.empty = function () {
    return !this.queue.length;
};