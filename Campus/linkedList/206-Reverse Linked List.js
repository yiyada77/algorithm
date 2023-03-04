/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let pre = null;
    let cur = head;
    while (cur) {
        let tmpNode = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tmpNode;
    }
    return pre;
};