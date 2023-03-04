/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let res = new ListNode(null);
    let nextRes = res;

    let carry = 0;
    let val = 0;
    while (l1 != null || l2 != null) {
        const x = (l1 != null) ? l1.val : 0;
        const y = (l2 != null) ? l2.val : 0;

        val = (x + y + carry) % 10;
        carry = Math.floor((x + y + carry) / 10);

        nextRes.next = new ListNode(val);
        nextRes = nextRes.nextß;

        if (l1 != null) l1 = l1.next;
        if (l2 != null) l2 = l2.next;
    }

    if (carry) nextRes.next = new ListNode(carry);

    return res.next;
};