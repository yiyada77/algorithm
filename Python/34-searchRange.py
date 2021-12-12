def searchRange(self, nums: List[int], target: int) -> List[int]:
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            if nums[left] == target and nums[right] == target:
                return [left, right]
            if nums[left] != target:
                left += 1
            if nums[right] != target:
                right -= 1
        elif nums[mid] > target:
            right = mid - 1
        else:
            left = mid + 1

    return [-1, -1]
