/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 思路：用双指针pA 、pB循环俩个链表，
// 链表A循环结束就循环链表B，链表A循环结束就循环链表B，
// 当pA == pB时就是交点，因为两个指针移动的步数一样
// 时间O(n+m) 空间O(1)
var getIntersectionNode = function (headA, headB) {
    let pA = headA, pB = headB
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next
        pB = pB === null ? headA : pB.next
    }
    return pA
};