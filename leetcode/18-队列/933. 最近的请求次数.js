// 思路：将请求加入队列，如果队头元素请求的时间在[t-3000,t]之外 就不断出队
// 时间复杂度O(q)，q是ping的次数。空间复杂度O(w)，w是队列中最多的元素个数
var RecentCounter = function () {
    this.queue = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.queue.push(t)
    const time = t - 3000
    while (this.queue[0] < time) {
        this.queue.shift()
    }
    return this.queue.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */