/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    const map = new Map()
    for (let word of words) {
        map.set(word, (map.get(word) || 0) + 1)
    }

    const heap = new MinHeap()
    for (const [key, val] of map) {
        heap.offer({
            word: key,
            count: val
        })
        if (heap.size() > k) {
            heap.poll()
        }
    }
    const res = []
    for (let i = heap.size() - 1; i >= 0; i--) {
        res[i] = heap.poll().word
    }
    return res
};

class MinHeap {
    constructor(data = []) {
        this.data = data
        this.heapify()
    }
    heapify() {
        if (this.size() < 2) return
        for (let i = this.size() >> 1 - 1; i >= 0; i--) {
            this.bubbleDown(i)
        }
    }
    offer(val) {
        this.data.push(val)
        this.bubbleUp(this.size() - 1)
    }
    poll() {
        if (!this.size()) return null
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
    // 小顶堆
    bubbleUp(index) {
        while (index) {
            const parentIndex = index - 1 >> 1
            const parent = this.data[parentIndex].count
            const child = this.data[index].count
            if (parent > child) {
                this.swap(parentIndex, index)
                index = parentIndex
            } else {
                break
            }
        }
    }
    bubbleDown(index) {
        const lastIndex = this.size() - 1
        while (true) {
            const leftIndex = index * 2 + 1
            const rightIndex = index * 2 + 2
            let findIndex = index
            if (leftIndex <= lastIndex && this.data[leftIndex].count < this.data[findIndex].count) {
                findIndex = leftIndex
            }
            if (rightIndex <= lastIndex && this.data[rightIndex].count < this.data[findIndex].count) {
                findIndex = rightIndex
            }
            if (findIndex !== index) {
                this.swap(findIndex, index)
                index = findIndex
            } else {
                break
            }
        }
    }
}