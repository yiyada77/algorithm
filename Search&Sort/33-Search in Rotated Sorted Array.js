var search = function (nums, target) {
    if (nums.length === 0) {
        return -1;
    }
    let left = 0;
    let right = nums.length - 1;
    while (left < right - 1) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > nums[left]) {//left order
            if (nums[left] <= target && target < nums[mid]) {
                right = mid;
            } else {
                left = mid;
            }
        } else {//right order
            if (nums[mid] < target && target <= nums[right]) {
                left = mid;
            } else {
                right = mid;
            }
        }
    }
    if (nums[left] === target) {
        return left;
    }
    if (nums[right] === target) {
        return right;
    }
    return -1;
};