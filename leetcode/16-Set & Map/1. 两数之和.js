/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 时间O(n) 空间O(n)
var twoSum = function (nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const val = target - nums[i]
        if (map.has(val)) {
            return [map.get(val), i]
        } else {
            map.set(nums[i], i) // 不存在 map 中就将当前元素和下标存入 map
        }
    }
};