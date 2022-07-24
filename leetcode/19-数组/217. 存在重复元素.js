/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 时间O(n) 空间)(n)
var containsDuplicate = function (nums) {
    const set = new Set()
    for (const num of nums) {
        if (set.has(num)) {
            return true
        } else {
            set.add(num)
        }
    }
    return false
};