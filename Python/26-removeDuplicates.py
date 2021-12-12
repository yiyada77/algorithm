def removeDuplicates(self, nums: List[int]) -> int:
    if len(nums) < 2:
        return len(nums)
    else:
        slow = 0
        fast = 1
        while fast < len(nums):
            if nums[slow] == nums[fast]:
                fast += 1
            else:
                slow += 1
                nums[slow] = nums[fast]
                fast += 1

    return slow + 1
