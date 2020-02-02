var reverseBetween = function (head, m, n) {
    let res = new ListNode(null);
    res.next = head;
    let pre = res;
    let i = 1;
    let arr = [];
    while (i <= n) {
        if (i < m) {
            pre = pre.next;
        } else {
            arr.push(head.val);
        }
        head = head.next;
        i++;
    }

    len = arr.length;
    for (let j = 0; j < len; j++) {
        const node = new ListNode(arr.pop());
        pre.next = node;
        pre = pre.next;
    }
    pre.next = head;

    return res.next;
};
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */