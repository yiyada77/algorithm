/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    return toSortList(head, null)
};

function toSortList(head, tail) {
    if (head === null) {
        return head
    }
    if (head.next === tail) {//分割到只剩一个节点了
        head.next = null
        return head
    }
    let slow = head
    let fast = head
    while (fast !== tail) {
        slow = slow.next
        fast = fast.next
        if (fast !== tail) {
            fast = fast.next
        }
    }
    const mid = slow
    return merge(toSortList(head, mid), toSortList(mid, tail))
}

function merge(head1, head2) {
    const dummyHead = new ListNode(0)
    let res = dummyHead
    let p1 = head1
    let p2 = head2
    while (p1 !== null && p2 !== null) {
        if (p1.val <= p2.val) {
            res.next = p1
            p1 = p1.next
        } else {
            res.next = p2
            p2 = p2.next
        }
        res = res.next
    }

    if (p1 !== null) {
        res.next = p1
    } else if (p2 !== null) {
        res.next = p2
    }
    return dummyHead.next
}