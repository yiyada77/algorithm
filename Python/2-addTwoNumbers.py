# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
    head = ListNode(l1.val + l2.val)
    cur = head
    while l1.next or l2.next:
        l1 = l1.next if l1.next else ListNode()
        l2 = l2.next if l2.next else ListNode()
        cur.next = ListNode(l1.val + l2.val + cur.val // 10)
        cur.val = cur.val % 10
        cur = cur.next

    if cur.val >= 10:
        cur.next = ListNode(cur.val // 10)
        cur.val = cur.val % 10

    return head
