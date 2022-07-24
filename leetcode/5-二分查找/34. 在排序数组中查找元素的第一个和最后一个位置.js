/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 时间O(logn) 空间O(1)
var searchRange = function (nums, target) {
    if (nums.length >= 1) {
        const first = findTheFirstIdx(nums, target)
        const last = findTheLastIdx(nums, target)
        if (first != -1 && last != -1) {
            return [first, last]
        }
    }
    return [-1, -1]
};

function findTheFirstIdx(nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        const mid = parseInt((left + right) / 2)
        if (nums[mid] == target) {
            if (nums[mid] != nums[mid - 1]) {
                return mid
            } else {
                right = mid - 1
            }
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}

function findTheLastIdx(nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        const mid = parseInt((left + right) / 2)
        if (nums[mid] == target) {
            if (nums[mid] != nums[mid + 1]) {
                return mid
            } else {
                left = mid + 1
            }
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}