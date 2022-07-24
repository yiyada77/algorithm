/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

// 时间O(n) 空间O(1)
var reverseBetween = function (head, left, right) {
    const dummyNode = new ListNode()
    dummyNode.next = head
    let pre = dummyNode
    for (let i = 1; i < left; i++) { // 找到左起点前一个节点
        pre = pre.next
    }
    let cur = pre.next // cur 一直作为 反转链表的尾部，不改变它的值
    // pre 一直作为左边界，不改变它的值
    for (let i = 0; i < right - left; i++) {
        const next = cur.next // 保存 cur.next
        cur.next = next.next // 断开 cur 到 next 的连接，此时 next 是游离的头 
        next.next = pre.next // next 指向反转链表的当前头 pre.next
        pre.next = next // next 取代旧头成为新头
    }
    return dummyNode.next
};