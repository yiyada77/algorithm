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
 var reverseList = function(head) {
    let end=null
    let cur=head
    while(cur){
        let next=cur.next
        cur.next=end
        end=cur
        cur=next
    }
    return end
};