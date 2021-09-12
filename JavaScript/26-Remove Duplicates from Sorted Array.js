/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length <= 1) return nums;
    let pos = 0, i = 1;
    while (i < nums.length) {
        if (nums[pos] === nums[i]) {
            i++;
        } else {
            pos++;
            nums[pos] = nums[i];
        }
    }
    return pos + 1;
};