# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

def partition(self, head: ListNode, x: int) -> ListNode:
    if not head or not head.next:
        return head

    small = small_head = ListNode()
    big = big_head = ListNode()

    while head:
        if head.val < x:
            small.next = head
            small = small.next
        else:
            big.next = head
            big = big.next
        head = head.next

    small.next = big_head.next
    big.next = None

    return small_head.next
