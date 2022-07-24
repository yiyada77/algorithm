/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    if (nums.length < 2) return nums[0]
    let countMap = {}
    for (const i of nums) {
        if (i in countMap) {
            countMap[i]++
            if (countMap[i] > nums.length / 2) {
                return i
            }
        } else {
            countMap[i] = 1
        }
    }
    return 0
};