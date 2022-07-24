/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 时间O() 空间
var intersection = function (nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)

    if (set1.size > set2.size) {
        [set1, set2] = [set2, set1] // 保证set1是短数组
    }
    const res = []
    for (const num of set1) {
        if (set2.has(num)) {
            res.push(num)
        }
    }
    return res
};