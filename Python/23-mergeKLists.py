# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

def mergeKLists(self, lists: List[ListNode]) -> ListNode:
    if len(lists) == 0:
        return None
    for i in range(len(lists) - 1, -1, -1):
        if lists[i] == None:
            lists.pop(i)

    head = pre = None
    while len(lists) > 0:
        mini = 0
        for i in range(len(lists)):
            if lists[i].val < lists[mini].val:
                mini = i
        tmp = ListNode(lists[mini].val)
        lists[mini] = lists[mini].next

        if lists[mini] == None: lists.pop(mini)
        if head == None: head = tmp
        if pre != None: pre.next = tmp

        pre = tmp

    return head
