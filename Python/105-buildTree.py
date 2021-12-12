# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        def helper(preorder, inorder):
            if (not preorder): return None
            root = TreeNode(preorder[0])
            root_idx = inorder.index(preorder[0])
            root.left = helper(preorder[1:root_idx + 1], inorder[0:root_idx])
            root.right = helper(preorder[root_idx + 1:], inorder[root_idx + 1:])
            return root

        return helper(preorder, inorder)
