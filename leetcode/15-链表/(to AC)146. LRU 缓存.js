/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity
    this.hashTable = {}
    this.count = 0
    this.dummyHead = new ListNode()
    this.dummyTail = new ListNode()
    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let node = this.hashTable[key]
    if (key === null) return -1
    this.moveToHead(node)
    return node.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let node = this.hashTable[key]
    if (node) { // 存在就更新值，并移到头部
        node.value = value
        this.moveToHead(node)
    } else { // 不存在就创建节点，加入头部
        let newNode = new ListNode(key, value)
        this.addToHead(newNode)
        this.hashTable[key] = value
        this.count++
        if (this.count > this.capacity) {
            this.removeLRUItem()
        }
    }
};
// 将cache中的节点移到头部
LRUCache.prototype.moveToHead = function (node) {
    this.removeFromList(node)
    this.addToHead(node)
}
// 删除某个节点的指针操作
LRUCache.prototype.removeFromList = function (node) {
    let tempForPrev = node.prev
    let tempForNext = node.next
    tempForPrev.next = tempForNext
    tempForNext.prev = tempForPrev
}
// 加入链表头的指针操作
LRUCache.prototype.addToHead = function (node) {
    node.prev = this.dummyHead
    node.next = this.dummyHead.next
    this.dummyHead.next.prev = node
    this.dummyHead.next = node
}
// 从缓存中删除
LRUCache.prototype.removeLRUItem = function () {
    let tail = this.popTail()
    delete this.hashTable[tail.key]
    this.count--
}
// 删除尾节点
LRUCache.prototype.popTail = function () {
    let tailItem = this.dummyTail.prev
    this.removeFromList(tailItem)
    return tailItem
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class ListNode { // 自定义双向链表
    constructor(key, value) {
        this.key = key
        this.value = value
        this.prev = null // 指向前一个节点
        this.next = null // 指向后一个节点
    }
}