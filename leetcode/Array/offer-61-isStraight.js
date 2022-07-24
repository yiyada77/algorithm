/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
    nums.sort((a, b) => a - b)
    let kingNum = 0
    let spaceNum = 0

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === 0) {
            kingNum++
        } else {
            const space = nums[i + 1] - nums[i]
            if (space === 0) {
                return false
            } else {
                spaceNum += space - 1
            }
        }
    }
    return kingNum - spaceNum >= 0
};