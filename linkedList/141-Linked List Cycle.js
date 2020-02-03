/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function (head) {
//     let arr=[];
//     while(head!=null){
//         if(arr.includes(head)){
//             return true;
//         }else{
//             arr.push(head);
//         }
//         head=head.next;
//     }
//     return false;
// };
function hasCycle(head) {
    if (!head || !head.next) return false;
    let fast = head.next;
    let slow = head;
    while (fast !== slow) {
        if (!fast || !fast.next) return false;
        fast = fast.next.next;
        slow = slow.next;
    }
    return true;
}