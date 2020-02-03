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
var mergeTwoLists = function (l1, l2) {
    let res = new ListNode(null);
    let nextRes = res;

    while (l1 != null && l2 != null) {
        let val = 0;
        if (l1.val <= l2.val) {
            val = l1.val;
            l1 = l1.next;
        } else {
            val = l2.val;
            l2 = l2.next;
        }
        nextRes.next = new ListNode(val);
        nextRes = nextRes.next;
    }

    if (l1 === null) nextRes.next = l2;
    if (l2 === null) nextRes.next = l1;

    return res.next;
};