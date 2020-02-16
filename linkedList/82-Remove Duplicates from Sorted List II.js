/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let arr = [];
    let flg;
    while (head) {
        if (head.val === flg) {
            head = head.next;
            continue;
        } else {
            if (arr.indexOf(head.val) > -1) {//重复
                flg = head.val;
                arr.pop();
            } else {//不重复
                arr.push(head.val);
            }
        }
        head = head.next;
    }
    let cur = new ListNode(null);
    let res = cur;
    for (let i = 0; i < arr.length; i++) {
        let node = new ListNode(arr[i]);
        cur.next = node;
        cur = cur.next;
    }
    return res.next;
};