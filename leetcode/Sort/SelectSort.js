
/**
 * 每次循环选取一个最小的数字放到前面的有序序列中。
 */
var selectSort = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j
            }
        }
        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
    }
    return nums
};