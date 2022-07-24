/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (nums.length >= 1) {
        const first = findFirst(nums, target, 0, nums.length - 1)
        const last = findLast(nums, target, 0, nums.length - 1)
        if (first !== -1 && last !== -1) {
            return [first, last]
        }
    }
    return [-1, -1]
};

function findFirst(nums, target, start, end) {
    if (start > end) {
        return -1
    }
    const mid = parseInt((start + end) / 2)
    if (nums[mid] === target) {
        if (nums[mid] !== nums[mid - 1]) {
            return mid
        } else {
            return findFirst(nums, target, start, mid - 1)
        }
    } else if (nums[mid] < target) {
        return findFirst(nums, target, mid + 1, end)
    } else {
        return findFirst(nums, target, start, mid - 1)
    }
}

function findLast(nums, target, start, end) {
    if (start > end) {
        return -1
    }
    const mid = parseInt((start + end) / 2)
    if (nums[mid] === target) {
        if (nums[mid] !== nums[mid + 1]) {
            return mid
        } else {
            return findLast(nums, target, mid + 1, end)
        }
    } else if (nums[mid] < target) {
        return findLast(nums, target, mid + 1, end)
    } else {
        return findLast(nums, target, start, mid - 1)
    }
}