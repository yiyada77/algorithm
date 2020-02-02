/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let res = new ListNode(null);
    res.next = head;
    let pre = res, cur = head;
    while (cur) {
        if (cur.val !== val) {
            pre = cur;
        } else {
            pre.next = cur.next;
        }
        cur = cur.next;
    }
    return res.next;
};