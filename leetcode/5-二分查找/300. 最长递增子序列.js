/**
 * @param {number[]} nums
 * @return {number}
 */
// dp
// 思路：dp[i]表示选择nums[i]，并且以nums[i]结尾的最长上升子序列的长度。
// 两层循环 i：1～nums.length，j：0～i，
// 如果nums[i] > nums[j]，则构成一个上升对，dp[i]就从dp[i], dp[j]+1两个种选择较大者，
// 最后返回dp数组总的最大数
// 时间O(n^2) 空间O(n)

var lengthOfLIS = function (nums) {
    const n = nums.length
    const dp = new Array(n).fill(1)
    if (n == 1) return n

    let res = 1
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        res = dp[i] > res ? dp[i] : res
    }
    return res
};

// 二分查找+贪心
// 思路：准备tail数组存放最长上升子序列，
// 核心思想就是越小的数字越要往前放，
// 这样后面就会有更多的数字可以加入tails数组。
// 将nums中的数不断加入tail，
// 当nums中的元素比tail中的最后一个大时,可以放心push进tail，
// 否则进行二分查找，让比较小的数二分查找到合适的位置，让后面有更多的数字与这个数形成上升子序列
// 时间复杂度O(nlogn)，n为nums的长度，每次二分查找需要logn，所以是总体的复杂度是O(nlogn)。
// 空间复杂度是O(n) ,tail数组的开销
var lengthOfLIS = function (nums) {
    const n = nums.length
    if (n == 1) return n

    let tail = [nums[0]]
    for (let i = 1; i < n; i++) {
        if (nums[i] > tail[tail.length - 1]) {
            tail.push(nums[i])
        } else {
            let left = 0
            let right = tail.length - 1
            while (left < right) {
                const mid = parseInt((left + right) / 2)
                if (nums[i] > tail[mid]) {
                    left = mid + 1
                } else {
                    right = mid
                }
            }
            tail[left] = nums[i]
        }
    }
    return tail.length
};