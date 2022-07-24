/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 时间O(m+n) 空间O(min(m,n))
var intersect = function (nums1, nums2) {
    const map = {}
    const arr = []
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1] // 保证nums1为短数组，对长度小的哈希
    }
    for (const num of nums1) {
        if (map[num]) {
            map[num]++
        } else {
            map[num] = 1
        }
    }
    for (const num of nums2) {
        if (map[num]) {
            arr.push(num)
            map[num]--
        }
    }
    return arr
};