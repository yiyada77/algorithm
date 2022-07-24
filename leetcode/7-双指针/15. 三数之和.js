/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 时间O(n^2) 空间O(logn)sort排序
var threeSum = function (nums) {
    const len = nums.length
    if (len < 3) return [] //少于三个元素
    nums.sort((a, b) => a - b) //从小到大排序

    const res = []
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) {
            break //在递增数组中，最小的元素都大于零，不可能满足三数之和为0，循环结束
        }
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue //去重
        }
        let L = i + 1
        let R = len - 1
        while (L < R) {
            const sum = nums[i] + nums[L] + nums[R]
            if (sum == 0) {
                res.push([nums[i], nums[L], nums[R]])
                while (L < R && nums[L] == nums[L + 1]) {
                    L++ //去重  
                }
                while (L < R && nums[R] == nums[R - 1]) {
                    R-- //去重
                }
                L++
                R--
            } else if (sum < 0) {
                L++
            } else {
                R--
            }
        }
    }
    return res
};