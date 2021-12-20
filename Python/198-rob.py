class Solution:
    def rob(self, nums: List[int]) -> int:
        yes, no = 0, 0
        for i in nums:
            yes, no = i + no, max(yes, no)
        return max(yes, no)
