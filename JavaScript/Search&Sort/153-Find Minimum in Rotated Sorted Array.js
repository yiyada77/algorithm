var findMin = function (nums) {
    if (nums.length === 0) {
        return -1;
    }
    let left = 0;
    let right = nums.length - 1;
    while (left < right - 1) {
        if (nums[left] < nums[right]) {
            return nums[left];
        }
        let mid = Math.ceil((left + right) / 2);
        if (nums[mid] > nums[left]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    if (nums[left] < nums[right]) {
        return nums[left];
    } else {
        return nums[right];
    }
};