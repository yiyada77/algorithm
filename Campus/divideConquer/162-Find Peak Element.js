var findPeakElement = function (nums) {
    let start = 0;
    let end = nums.length - 1;

    if (end == start) {
        return start;
    }
    while (start < end) {
        let mid = parseInt((end - start) / 2) + start;
        if (nums[mid] > nums[mid + 1]) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return start;
};
