/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const heap = new MinHeap()
    const dummyHead = new ListNode()
    let cur = dummyHead
    lists.forEach(list => {
        if (list) {
            heap.offer(list)
        }
    })

    while (heap.size()) {
        const minNode = heap.poll()
        cur.next = minNode
        cur = cur.next
        if (minNode.next) {
            heap.offer(minNode.next)
        }
    }
    return dummyHead.next
};

class MinHeap {
    constructor(data = []) {
        this.data = data
        this.heapify()
        this.count = 0
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
            const parent = this.data[parentIndex].val
            if (parent > this.data[index].val) {
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
            if (leftIndex <= lastIndex && this.data[findIndex].val > this.data[leftIndex].val) {
                findIndex = leftIndex
            }
            if (rightIndex <= lastIndex && this.data[findIndex].val > this.data[rightIndex].val) {
                findIndex = rightIndex
            }
            if (index !== findIndex) {
                this.swap(findIndex, index)
                index = findIndex
            } else {
                break
            }
        }
    }
}