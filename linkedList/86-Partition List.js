/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let firstHead = new ListNode(null);
    let secondHead = new ListNode(null);
    let res = new ListNode(null);
    let plug = new ListNode(null);
    res = firstHead;
    plug = secondHead;

    while (head) {
        const cur = head.val;
        if (cur < x) {
            firstHead.next = new ListNode(cur);
            firstHead = firstHead.next;
        } else {
            secondHead.next = new ListNode(cur);
            secondHead = secondHead.next;
        }
        head = head.next;
    }
    firstHead.next = plug.next;
    return res.next;
};