/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 快慢指针
// 思路:设置快慢指针，在环形链表某处相遇
// 直线长度为a, 环形周长为b+c b为相遇的位置
// slow=a+b fast=a+n(b+c)+b 2slow=fast
// a=(n-1)(b+c)+c
// 此时将快指针重置在head处，与慢指针以相同速度前进，相遇处即为入环点
// 时间O(n) 空间O(1)
var detectCycle = function (head) {
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            fast = head
            while (fast !== slow) {
                slow = slow.next
                fast = fast.next
            }
            return fast
        }
    }
    return null
};

// Set
// 时间O(n) 空间O(n)
var detectCycle = function (head) {
    let visited = new Set()
    while (head) {
        if (visited.has(head)) return head
        visited.add(head)
        head = head.next
    }
    return null
};
