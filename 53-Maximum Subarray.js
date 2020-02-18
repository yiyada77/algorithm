var maxSubArray = function (nums) {
    let res = nums[0], sum = 0;
    for (const num of nums) {
        if (sum > 0) {
            sum += num;
        } else {
            sum = num;
        }
        res = Math.max(sum, res);
    }
    return res;
};