# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> TreeNode:
        def helper(inorder, postorder):
            if not postorder: return None
            val = postorder.pop()
            root = TreeNode(val)
            root_idx = inorder.index(val)
            root.left = helper(inorder[0:root_idx], postorder[0:root_idx])
            root.right = helper(inorder[root_idx + 1:], postorder[root_idx:root_idx + len(inorder[root_idx + 1:])])
            return root

        return helper(inorder, postorder)
