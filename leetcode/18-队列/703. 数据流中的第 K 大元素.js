/**
 * @param {number} k
 * @param {number[]} nums
 */

// 维护一个长度为k的小顶堆，遍历nums的元素放入小顶堆，超出k不断出堆，最后留在堆内的就是数据流中最大的k个数，堆顶是第k个
// 时间O(nlogk) 空间O(k)
var KthLargest = function (k, nums) {
    this.k = k
    this.heap = new minHeap()
    for (const i of nums) {
        this.add(i)
    }
    return this
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.heap.add(val)
    if (this.heap.size() > this.k) {
        this.heap.poll()
    }
    return this.heap.peek()
};
class minHeap {
    constructor(data = []) {
        this.data = data
        this.heapify()
    }
    heapify() { // 堆化
        if (this.size() < 2) return
        for (let i = this.size() >> 1 - 1; i >= 0; i--) { // 找到第一个非叶子结点
            this.bubbleDown(i)
        }
    }
    add(val) { // 添加到堆尾
        this.data.push(val)
        this.bubbleUp(this.size() - 1)
    }
    poll() { // 从堆顶删除
        if (!this.size()) return
        const res = this.data[0]
        const last = this.data.pop()
        if (this.size()) {
            this.data[0] = last
            this.bubbleDown(0)
        }
        return res
    }
    size() {
        return this.data.length
    }
    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
    }
    peek() {
        if (this.size() == 0) return null
        return this.size() == 0 ? null : this.data[0]
    }
    bubbleUp(index) {
        while (index) {
            const parentIndex = (index - 1) >> 1
            const parent = this.data[parentIndex]
            const child = this.data[index]
            if (parent > child) {
                this.swap(index, parentIndex)
                index = parentIndex
            } else {
                break
            }
        }
    }
    bubbleDown(index) {
        const lastIndex = this.size() - 1
        while (true) {
            let findIndex = index * 2 + 1
            if (findIndex + 1 <= lastIndex && this.data[findIndex] > this.data[findIndex + 1]) {
                findIndex++
            }
            if (this.data[index] > this.data[findIndex]) {
                this.swap(index, findIndex)
                index = findIndex
            } else {
                break
            }
        }
    }
}
