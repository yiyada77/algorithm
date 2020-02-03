/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head === null || head.next === null || k === 0) return head;

    let firstNode = new ListNode(null);
    firstNode.next = head;
    let count = 1;
    while (head.next !== null) {
        head = head.next;
        count++;
    }
    head.next = firstNode.next;

    let pos = count - k % count;
    while (pos !== 0) {
        head = head.next;
        pos--;
    }
    firstNode.next = head.next;
    head.next = null;
    return firstNode.next;
};