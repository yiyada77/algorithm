/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// 递归
// 时间O(n) 空间O(n)
//例：0->1->2->3  val=2
//level1: 0.next = removeElements(1, 2);			return 1					0->1->3->null
//level2: 1.next = removeElements(2, 2);			return 3					1->3->null
//level3: 2.next = removeElements(3, 2);			return 3					2->3->null
//level4: 3.next = removeElements(null, 2); 	return null;    	3->null
var removeElements = function (head, val) {
    if (head === null) {//递归终止 遍历完了链表
        return head;
    }
    head.next = removeElements(head.next, val);//递归调用函数removeElements
    return head.val === val ? head.next : head;//如果当前元素值是val，则返回下一个元素，否则直接返回当前元素
};
// 迭代
// 时间O(n) 空间O(1)
var removeElements = function (head, val) {
    const dummyNode = new ListNode(0, head)
    let temp = dummyNode
    while (temp.next) {
        if (temp.next.val != val) {
            temp = temp.next
        } else {
            temp.next = temp.next.next
        }
    }
    return dummyNode.next
};