class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        for i in range(len(nums)):
            idx = abs(nums[i]) - 1
            nums[idx] = -abs(nums[idx])

        res = []

        for j in range(len(nums)):
            if nums[j] > 0:
                res.append(j + 1)

        return res
