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
/**
 * 链表=a+b // a为直线，b为环
 * f=2s 
 * f-s=nb // f s在b环见面时，f比s多走nb
 * 第三个指针c，从head出发，经过入环的路程为a+nb
 * 即c与s同时出发，相遇时，刚好为入环点
 */
 var detectCycle = function(head) {
    if(!head||!head.next) return null
    let slow=head
    let fast=head
    let start=head
    while(fast&&fast.next){
        slow=slow.next
        fast=fast.next.next
        if(slow===fast){
            while(start!==slow){
                slow=slow.next
                start=start.next
            }
            return start
        } 
    }
    return null
};