/**
 * @param {number[][]} intervals
 * @return {number}
 */

// 贪心
// 思路：intervals按右边界排序，然后从左往右遍历，
// 右边界结束的越早，留给后面的区间的空间就越大，不重合的区间个数就越多，
// intervals的长度减去最多的不重复的区间 就是最少删除区间的个数
// 时间复杂度O(nlogn)，数组排序O(nlogn)，循环一次数组O(n)。空间复杂度O(logn)，排序需要的栈空间
var eraseOverlapIntervals = function (intervals) {
    const n = intervals.length
    if (n === 1) return 0

    intervals.sort((a, b) => a[1] - b[1])
    let right = intervals[0][1]
    let count = 1
    for (let i = 1; i < n; i++) {
        if (intervals[i][0] >= right) {
            ++count
            right = intervals[i][1]
        }
    }
    return n - count
};

// dp
// 思路：dp[i]表示前i个区间中最大不重合区间的个数，
// 首先将区间数组按左边界排序，找出intervals中最多有多少个不重复的区间，
// 动态规划方程dp[i] = Math.max(dp[i], dp[j] + 1)。
// intervals的长度减去最多的不重复的区间 就是最少删除区间的个数
// 复杂度：时间复杂度O(n^2)，两层嵌套循环leetcode执行超时 复杂度过高。空间复杂度O(n)，dp数组的空间
