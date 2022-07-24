/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let small = 0
    let big = nums.length - 1

    while (true) {
        if (nums.length === 1) return nums[0]
        let mid = Math.floor(nums.length / 2)
        if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) {
            return nums[mid]
        }
        if (mid % 2 === 0) {//even
            if (nums[mid] === nums[mid + 1]) {//left
                nums = nums.splice(mid + 2)
            } else {//right
                nums = nums.splice(0, mid - 1)
            }
        } else {//odd
            if (nums[mid] === nums[mid + 1]) {//right
                nums = nums.splice(0, mid)
            } else {//left
                nums = nums.splice(mid + 1)
            }
        }
    }
};