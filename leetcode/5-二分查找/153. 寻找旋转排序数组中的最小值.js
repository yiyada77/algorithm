/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let low = 0
    let high = nums.length - 1
    while (low < high) {
        const mid = parseInt((low + high) / 2)
        if (nums[mid] > nums[high]) {
            low = mid + 1
        } else if (nums[mid] < nums[high]) {
            high = mid
        }
    }
    return nums[low]
};