/**
 * @param {number[]} nums
 * @return {number}
 */
// dp
// 思路：当前最大子序和只和前面的子序和相关，循环数组，不断更新最大子序和
// 时间O(n) 空间O(n)
var maxSubArray = function (nums) {
    const n = nums.length
    const dp = new Array(n)
    dp[0] = nums[0]

    for (let i = 1; i < n; i++) {
        dp[i] = nums[i]
        if (dp[i - 1] > 0) { // 前面的状态是正数 则加上
            dp[i] += dp[i - 1]
        }
    }
    return Math.max(...dp)
};
// 状态压缩
// 时间O(n) 空间O(1)
var maxSubArray = function (nums) {
    let max = nums[0]
    let pre = 0
    for (const num of nums) {
        pre = Math.max(pre + num, num)
        max = Math.max(max, pre)
    }
    return max
};

// 方法2.分治
// 思路：不断分割，直到每个部分是一个数字为止，然后不断合并，
// 返回左右和左右合并之后，3个最大子序和中的最大的一个
// 复杂度：时间复杂度O(nlogn)，二分复杂度O(logn)，
// 二分之后每一层统计左右和合并之后的最大子序和复杂度是O(n)，
// 所以之后的复杂度是O(nlogn)。空间复杂度O(logn)，递归的栈空间，因为是二分，每次数据规模减半
// 效果也没有dp好，没有自己实现，下面是其他人的代码，可参考
function crossSum(nums, left, right, mid) {
    if (left === right) {//左右相等 返回左边的值
        return nums[left];
    }

    let leftMaxSum = Number.MIN_SAFE_INTEGER;//左边最大值初始化
    let leftSum = 0;
    for (let i = mid; i >= left; --i) {
        leftSum += nums[i];
        leftMaxSum = Math.max(leftMaxSum, leftSum);//更新左边最大子序和
    }

    let rightMaxSum = Number.MIN_SAFE_INTEGER;
    let rightSum = 0;
    for (let i = mid + 1; i <= right; ++i) {
        rightSum += nums[i];
        rightMaxSum = Math.max(rightMaxSum, rightSum);//更新右边最大子序和
    }

    return leftMaxSum + rightMaxSum;//返回左右合并之后的最大子序和
}

function _maxSubArray(nums, left, right) {
    if (left === right) {//递归终止条件
        return nums[left];
    }

    const mid = Math.floor((left + right) / 2);
    const lsum = _maxSubArray(nums, left, mid);//左边最大子序和
    const rsum = _maxSubArray(nums, mid + 1, right);//右边最大子序和
    const cross = crossSum(nums, left, right, mid);//合并左右的之后的最大子序和

    return Math.max(lsum, rsum, cross);//返回3中子序和中最大的
}

var maxSubArray = function (nums) {
    return _maxSubArray(nums, 0, nums.length - 1);
};
