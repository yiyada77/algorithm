# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        return self.recursion(root, float("-inf"), float("inf"))

    def recursion(self, root, min, max):
        if root == None: return True

        if root.val <= min or root.val >= max: return False

        return (self.recursion(root.left, min, root.val) and self.recursion(root.right, root.val, max))
