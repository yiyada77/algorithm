def searchInsert(self, nums, target):
    start, end = 0, len(nums) - 1
    while end >= start:
        mid = (end + start) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] > target:
            end = mid - 1
        else:
            start = mid + 1

    return start
