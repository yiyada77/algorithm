var findKthLargest = function (nums, k) {
    let left = 0;
    let right = nums.length - 1;
    return find(nums, k, left, right);
};

var find = function (nums, k, left, right) {
    let start = left;
    let end = right;
    let key = nums[start];

    while (start < end) {
        while (start < end && nums[end] <= key) {
            end--;
        }
        nums[start] = nums[end];
        while (start < end && nums[start] >= key) {
            start++;
        }
        nums[end] = nums[start];
    }
    nums[start] = key;
    if (start == k - 1) {
        return nums[start];
    }
    if (start < k - 1) {
        return find(nums, k, start + 1, right);
    } else {
        return find(nums, k, left, start - 1);
    }
}