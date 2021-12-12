# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

def deleteDuplicates(self, head: ListNode) -> ListNode:
    if not head or not head.next:
        return head

    res = ListNode(next=head)
    pre = res
    cur = head
    while cur:
        while cur.next and cur.val == cur.next.val:
            cur = cur.next
        if pre.next == cur:
            pre = cur
        else:
            pre.next = cur.next
        cur = cur.next

    return res.next
