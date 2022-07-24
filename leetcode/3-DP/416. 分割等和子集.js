/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 时间O(sn) 空间(sn)
var canPartition = function (nums) {
    let sum = 0
    nums.map(num => {
        sum += num
    })
    if (sum % 2 !== 0) {//奇数，无法平分
        return false
    } else {
        sum = sum / 2
    }
    const n = nums.length
    const dp = Array.from(new Array(n + 1), () => new Array(sum + 1).fill(false))

    //dp[i][j]i个物品，j剩余容量
    //dp[0][...]=false 没有物品被装入
    //dp[...][0]=true 剩余容量为0，装满
    for (let i = 0; i <= n; i++) {
        dp[i][0] = true
    }
    for (let i = 1; i <= n; i++) {
        const num = nums[i]
        for (let j = 1; j <= sum; j++) {
            if (j - num >= 0) {//还能装，可装可不装
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - num]//dp[i-1][j]本次不装，dp状态取决于i-1时的状态，dp[i-1][j-num]本次装入num，dp状态取决于i-1时能否装满j-num
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    return dp[n][sum]
};

// 时间O(sn) 空间(s)
var canPartition = function (nums) {
    let sum = 0
    nums.map(num => {
        sum += num
    })
    if (sum % 2 !== 0) {//奇数，无法平分
        return false
    } else {
        sum = sum / 2
    }
    const n = nums.length
    const dp = new Array(sum + 1).fill(false)
    //dp[i]剩余容量i
    dp[0] = true
    for (let i = 0; i < n; i++) {
        for (let j = sum; j >= 1; j--) {//从后向前计算，如果从前向后的话，最新的值会覆盖老的值，导致计算结果不正确
            dp[j] = dp[j] || (j - nums[i] >= 0 && dp[j - nums[i]])
        }
    }
    return dp[sum]
};