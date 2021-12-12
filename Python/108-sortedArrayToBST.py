# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
        def helper(left_idx, right_idx):
            if left_idx > right_idx: return None
            root_idx = (right_idx + left_idx) // 2
            root = TreeNode(nums[root_idx])
            root.left = helper(left_idx, root_idx - 1)
            root.right = helper(root_idx + 1, right_idx)
            return root

        return helper(0, len(nums) - 1)
