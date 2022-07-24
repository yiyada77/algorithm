/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// 递归
// 时间复杂度O(m+n)，m、n为两个链表的长度，每次递归排除掉一个节点，总递归次数是m+n。空间复杂度O(m+n)，递归栈空间
var mergeTwoLists = function (list1, list2) {
    // 递归终止 分隔到不能分割 也就是两个链表有一个的 next 不存在了 那就没法分割问题了 只能返回
    if (!list1) {
        return list2
    } else if (!list2) {
        return list1
    } else if (list1.val < list2.val) { // 当前节点谁小，就让这个较小的节点的 next 和另一个链表继续递归合并
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list2.next, list1)
        return list2
    }
};

// 迭代
// 时间复杂度O(m+n)，m、n为两个链表的长度，空间复杂度O(1)
var mergeTwoLists = function (list1, list2) {
    let res = new ListNode(0)
    let pre = res
    while (list1 && list2) {
        if (list1.val < list2.val) {
            pre.next = list1
            list1 = list1.next
        } else {
            pre.next = list2
            list2 = list2.next
        }
        pre = pre.next
    }
    pre.next = list1 === null ? list2 : list1
    return res.next
};