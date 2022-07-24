class Heap {
    // 构造函数
    constructor(type = 'min', data = []) {
        this.type = type
        this.data = data
        this.heapify() // 堆化
    }
    // 堆化
    heapify() {
        if (this.size() < 2) return
        for (let i = parseInt(this.size() / 2) - 1; i >= 0; i--) {
            this.bubbleDown(i)
        }
    }
    // 增
    // 先把新元素加入数组的末尾，
    // 再通过不断比较与 parent 的值的大小，决定是否交换，直到满足堆序性为止。
    offer(value) {
        this.data.push(value) // 先把新元素加入数组的末尾
        this.bubbleUp(this.size() - 1) // 从下往上不断与 parent 比较大小，调整堆序
    }
    // 删
    // 由于堆属于优先队列，只能从头部移除，
    // 移除头部后，使用末尾元素填充头部，开始头部下沉操作
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
    // 查
    peek() {
        if (!this.size()) return null
        return this.data[0]
    }
    // 查看堆的大小
    size() {
        return this.data.length
    }
    // 交换堆中两个元素的位置
    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]]
    }
    // 从下往上调整
    // 首先找到 parent 节点，对比当前 child 与 parent 的大小是否符合堆的类型，
    // 不符合的进行位置交换，符合的结束循环
    bubbleUp(index) {
        while (index) {
            const parentIdx = (index - 1) >> 1
            const parent = this.data[parentIdx].val
            const child = this.data[index].val
            if ((this.type == 'min' && parent > child) // 小顶堆，parent < child
                || (this.type == 'max' && parent < child)) // 大顶堆，parent > child
            {
                this.swap(parentIdx, index)
                index = parentIdx
            } else {
                break
            }
        }
    }
    // 从上往下调整
    // 先从parent找到左child，得到child里更大更小的那一个
    // 对比 parent 与 child 的大小是否符合堆的类型，
    // 不符合进行交换，再以当前的 child(以前的parent)作为parent，继续寻找它的child进行比对
    bubbleDown(index) {
        const lastIndex = this.size() - 1
        while (true) {
            const left = index * 2 + 1
            const right = left + 1
            let findIndex = index
            if (left <= lastIndex) {
                if ((this.type == 'min' && this.data[left].val < this.data[findIndex].val) // 小顶堆，找更小
                    || (this.type == 'max' && this.data[left].val > this.data[findIndex].val)) // 大顶堆，找更大
                {
                    findIndex = left
                }
            }
            if (right <= lastIndex) {
                if ((this.type == 'min' && this.data[right].val < this.data[findIndex].val) // 小顶堆，找更小
                    || (this.type == 'max' && this.data[right].val > this.data[findIndex].val)) // 大顶堆，找更大
                {
                    findIndex = right
                }
            }
            if (index !== findIndex) {
                this.swap(index, findIndex)
                index = findIndex
            } else {
                break
            }
        }
    }
}