/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 时间O(n) 空间O(n)
var swapPairs = function (head) {
    if (head === null || head.next === null) { // 终止条件，必须要有两个节点
        return head
    }
    const newHead = head.next // 反转后链表的头节点
    head.next = swapPairs(newHead.next) // 让当前递归层的 head.next 指向交换后返回的头节点
    newHead.next = head // 让反转后的新的头节点指向当前层的 head 的节点
    return newHead // 返回反转后的头节点
};