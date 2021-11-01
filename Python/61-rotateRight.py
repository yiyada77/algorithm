# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
    if k == 0 or not head or not head.next:
        return head

    cur = head
    len = 1
    while cur.next:
        len += 1
        cur = cur.next

    if k % len == 0:
        return head

    cur.next = head
    count = len - (k % len)
    while count:
        cur = cur.next
        count -= 1

    res = cur.next
    cur.next = None

    return res
