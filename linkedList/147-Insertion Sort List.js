/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
    if (!head || !head.next) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    while (head && head.next) {
        if (head.next.val >= head.val) {
            head = head.next;
            continue;
        }
        let pre = dummy;

        while (head.next.val > pre.next.val) pre = pre.next;

        let cur = head.next;
        head.next = cur.next;
        cur.next = pre.next;
        pre.next = cur;
    }
    return dummy.next;
};