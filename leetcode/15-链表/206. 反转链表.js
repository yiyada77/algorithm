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

// 头插法
// 时间O(n) 空间O(1)
var reverseList = function (head) {
    let res = new ListNode()
    while (head) {
        const next = head.next // 保存下一个节点
        head.next = res.next // 切断 head 到下一个节点 next 的连接，指向 res.next
        res.next = head
        head = next
    }
    return res.next
};

// 迭代法
// 迭代法和头插法有一点不同注意对比 a,b两步
// 时间O(n) 空间O(1)
var reverseList = function (head) {
    let res = null
    let cur = head
    while (cur) {
        const next = cur.next // 保存下一个节点
        cur.next = res // a 切断 head 到下一个节点 next 的连接，指向 res.next
        res = cur // b
        cur = next
    }
    return res
};

// 递归
// 思路：用递归函数不断传入head.next，直到head==null或者heade.next==null，
// 到了递归最后一层的时候，让后面一个节点指向前一个节点，然后让前一个节点的next置为空，
// 直到到达第一层，就是链表的第一个节点，每一层都返回最后一个节点。
// 复杂度分析：时间复杂度：O(n)，n是链表的长度。空间复杂度：O(n)， n是递归的深度，递归占用栈空间，可能会达到n层
var reverseList = function (head) {
    if (head == null || head.next == null) {//递归终止条件
        return head;
    }
    const newHead = reverseList(head.next);//递归调用reverseList
    head.next.next = head;//到了递归最后一层的时候，让后面一个节点指向前一个节点
    head.next = null;//前一个节点的next置为空
    return newHead;//返回最后一个节点
};