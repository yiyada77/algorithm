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

    const heap = new MinHeap(comparator = (a, b) => {
        return a.count === b.count ? b.word.localeCompare(a.word) : a.count - b.count
    })
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
    constructor(comparator = (a, b) => a - b, data = []) {
        this.data = data
        this.comparator = comparator
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
    bubbleUp(index) {
        while (index) {
            const parentIndex = index - 1 >> 1
            if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
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
            if (leftIndex <= lastIndex && this.comparator(this.data[leftIndex], this.data[findIndex]) < 0) {
                findIndex = leftIndex
            }
            if (rightIndex <= lastIndex && this.comparator(this.data[rightIndex], this.data[findIndex]) < 0) {
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