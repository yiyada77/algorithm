/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (!head) return true;
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    if (arr.length === 1) return true;
    for (let i = 0; i < Math.ceil((arr.length) / 2); i++) {
        if (arr[i] !== arr[arr.length - i - 1]) {
            return false;
        }
    }
    return true;
};