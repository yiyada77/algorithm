# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        def recursion(root, length, res):
            if not root: return
            if len(res) == length: res.append([])
            res[length].append(root.val)
            if root.left: recursion(root.left, length + 1, res)
            if root.right: recursion(root.right, length + 1, res)

        res = []
        recursion(root, 0, res)
        return res
