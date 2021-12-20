# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        res = []
        self.recursion(root, res)
        return res

    def recursion(self, tree, res):
        if not tree: return
        res.append(tree.val)
        self.recursion(tree.left, res)
        self.recursion(tree.right, res)
