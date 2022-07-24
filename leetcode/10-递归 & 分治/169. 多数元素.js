/**
 * @param {number[]} nums
 * @return {number}
 */

// 方法1.排序
// 思路：排序数组，如果有一个数字出现的频率大于n/2，则在数组nums.length / 2的位置就是这个数
// 时间O(nlogn) 空间O(logn) sort的时间和空间

// 方法2.哈希表
// 思路：循环数组，用哈希表存储数字和对应的个数，如果数字出现的个数大于n/2则返回这个数
// 时间O(n) 空间O(n)

// 方法3.分治
// 思路：不断从数组的中间进行递归分割，直到每个区间的个数是1，然后向上合并左右区间个数较多的数，向上返回。
// 时间O(nlogn) 空间O(logn)，递归栈的消耗，不断二分。
var majorityElement = function (nums) {
    // O(n)
    const getCount = (num, m, n) => { // 统计索引m,n之间的num的数量
        let count = 0
        for (let i = m; i <= n; i++) {
            if (nums[i] == num) {
                count++
            }
        }
        return count
    }
    // O(logn)
    const getMore = (m, n) => { // 返回索引m，n之间数量较多的那一个
        if (m == n) return nums[m]
        const mid = parseInt((m + n) / 2)
        const left = getMore(m, mid) // 拆分空间
        const right = getMore(mid + 1, n)
        if (left == right) return left // 数量一样

        const leftCount = getCount(left, m, n)//O(n)
        const rightCount = getCount(right, m, n)
        return leftCount > rightCount ? left : right
    }
    return getMore(0, nums.length - 1)
};