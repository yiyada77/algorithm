/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (!head || !head.next) return null;
    let slow = head;
    let fast = head;
    let start = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            while (start !== slow) {
                start = start.next;
                slow = slow.next;
            }
            return start;
        }
    }
    return null;
};