/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];
    let arr = [];
    for (let i = 0; i < lists.length; i++) {
        while (lists[i] !== null) {
            arr.push(lists[i].val)
            lists[i] = lists[i].next;
        }
    }
    for (let j = 0; j < arr.length; j++) {
        for (let k = 1; k < arr.length - j; k++) {
            if (arr[k - 1] > arr[k]) {
                const tmp = arr[k];
                arr[k] = arr[k - 1];
                arr[k - 1] = tmp;
            }
        }
    }
    let res = new ListNode(null);
    let nextRes = res;
    for (let l = 0; l < arr.length; l++) {
        nextRes.next = new ListNode(arr[l]);
        nextRes = nextRes.next;
    }
    return res.next;
};