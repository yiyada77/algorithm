/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */

// 思路：在A和B中取出两个数的组合，将这两个数的和作为键，出现次数作为值加入哈希表中，
// 循环C、D，判断C和D中是否存在两个数的和 加 AB中的俩元素的和正好是0，统计组合数
// 复杂度：时间复杂度O(n^2),两个嵌套循环。空间复杂度O(n^2)，哈希表的空间，最差的情况下是n^2
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    const sumAB = new Map()
    nums1.forEach(a => {
        nums2.forEach(b => {
            const sum = a + b
            sumAB.set(sum, (sumAB.get(sum) || 0) + 1)
        })
    })
    let count = 0
    nums3.forEach(c => {
        nums4.forEach(d => {
            if (sumAB.has(-c - d)) {
                count += sumAB.get(-c - d)
            }
        })
    })
    return count
};