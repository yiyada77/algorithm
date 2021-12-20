# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def insertionSortList(self, head: ListNode) -> ListNode:
        dummy = ListNode(float('-inf'))
        cur = head
        while cur:
            pre = dummy
            while pre.next and pre.next.val <= cur.val:
                pre = pre.next
            tmp = cur.next
            cur.next = pre.next
            pre.next = cur
            cur = tmp
        return dummy.next
