/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 时间O(n) 空间O(1)
var sortColors = function (nums) {
    let p0 = 0
    let p2 = nums.length - 1
    for (let i = 0; i <= p2; i++) { // 当循环到了p2 说明p2右边的元素都是正确的数，所以i<=p2
        // 如果此时i指向元素2 i小于p2 则不断交换p2和i指向的元素 因为交换过来的数可能还是2，那这个2就处于不正确的位置了
        while (nums[i] == 2 && i < p2) { // 避免p2的元素是2||0的情况，所以一直交换
            [nums[p2], nums[i]] = [nums[i], nums[p2]]
            p2--
        }
        // 如果此时i指向元素0 则交换p0和i指向的元素
        if (nums[i] == 0) {
            [nums[p0], nums[i]] = [nums[i], nums[p0]]
            p0++
        }
    }
};