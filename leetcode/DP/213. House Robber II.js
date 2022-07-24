
/**
 * 如何才能保证第一间房屋和最后一间房屋不同时偷窃呢？
 * 如果偷窃了第一间房屋，则不能偷窃最后一间房屋，因此偷窃房屋的范围是第一间房屋到最后第二间房屋；
 * 如果偷窃了最后一间房屋，则不能偷窃第一间房屋，因此偷窃房屋的范围是第二间房屋到最后一间房屋。

 * 假设数组  nums 的长度为 n。如果不偷窃最后一间房屋，则偷窃房屋的下标范围是 [0, n-2][0,n−2]；
 * 如果不偷窃第一间房屋，则偷窃房屋的下标范围是 [1, n-1][1,n−1]。在确定偷窃房屋的下标范围之后，
 * 即可用第 198 题的方法解决。对于两段下标范围分别计算可以偷窃到的最高总金额，
 * 其中的最大值即为在 nn 间房屋中可以偷窃到的最高总金额。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const n = nums.length
    if (n === 1) {
        return nums[0]
    } else if (n === 2) {
        return Math.max(nums[0], nums[1])
    } else {
        return Math.max(robRange(nums, 0, n - 1), robRange(nums, 1, n))
    }
};

function robRange(nums, start, end) {
    let first = nums[start]
    let second = Math.max(nums[start], nums[start + 1])
    for (let i = start + 2; i < end; i++) {
        const tmp = second
        second = Math.max(first + nums[i], second)
        first = tmp
    }
    return second
}