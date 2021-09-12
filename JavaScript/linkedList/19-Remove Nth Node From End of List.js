/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let preHead = new ListNode(-1);
    preHead.next = head;
    let fast = preHead;
    let slow = preHead;

    while (n != 0) {
        fast = fast.next;
        n--;
    }
    while (fast.next != null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;

    return preHead.next;
};