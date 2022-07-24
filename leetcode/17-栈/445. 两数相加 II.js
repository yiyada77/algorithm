/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/**
 * 
 * 思路：将两个链表的节点都推入栈中，然后不断出栈，计算每个位置的值和进位，串连成一个新的链表
 * 复杂度：时间复杂度O(max(m,n))，m，n是两个链表的长度，空间复杂度O(m+n)
 */
var addTwoNumbers = function (l1, l2) {
    const stack1 = []
    const stack2 = []
    while (l1) {
        stack1.push(l1.val)
        l1 = l1.next
    }
    while (l2) {
        stack2.push(l2.val)
        l2 = l2.next
    }

    let carry = 0
    let res = null
    while (stack1.length || stack2.length || carry !== 0) { // 不断出栈
        const sum = (stack1.pop() || 0) + (stack2.pop() || 0) + carry
        const newNode = new ListNode(sum % 10)
        carry = parseInt(sum / 10)
        newNode.next = res // 向链表前插入新节点
        res = newNode // 重新赋值 res
    }
    return res
};