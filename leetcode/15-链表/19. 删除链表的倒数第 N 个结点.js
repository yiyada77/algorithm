/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// 时间O(n) 空间O(1)
var removeNthFromEnd = function (head, n) {
    const dummyNode = new ListNode(0, head)
    let fast = dummyNode
    let slow = dummyNode
    for (let i = 0; i <= n; i++) { // 先移动 n+1 步，以便让 slow 停在被删除的元素前一个位置 
        fast = fast.next
    }

    while (fast) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return dummyNode.next
};