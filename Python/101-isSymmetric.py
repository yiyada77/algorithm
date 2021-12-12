# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        def recursion(left, right):
            if left and not right:
                return False
            elif not left and right:
                return False
            elif not left and not right:
                return True
            else:
                return left.val == right.val and recursion(left.left, right.right) and recursion(left.right, right.left)

        if not root:
            return True
        else:
            return recursion(root.left, root.right)
