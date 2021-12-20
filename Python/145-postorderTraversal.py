# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        self.recursion(root, res)
        return res

    def recursion(self, tree, res):
        if not tree: return
        self.recursion(tree.left, res)
        self.recursion(tree.right, res)
        res.append(tree.val)
