/**
 * @param {number[]} height
 * @return {number}
 */

// 单调栈
// 当后面的柱子高度比前面的低时，是无法接雨水的
// 当出现高于栈顶的柱子时，说明可以对前面的柱子结算了
// 计算已经到手的雨水，然后出栈前面更低的柱子
// 时间O(n) 空间O(n)
// 时间复杂度O(n)，n是heights的长度，数组中的每个元素最多入栈出栈一次。空间复杂度O(n)，栈的空间，最多不会超过heights的长度
var trap = function (height) {
    let res = 0
    const stack = [] // 单调递减栈
    const n = height.length
    for (let i = 0; i < n; i++) {
        // 当前柱子的高度大于栈顶柱子的 不断出栈
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            const stackTopIdx = stack.pop()
            if (!stack.length) { // 栈为空时 跳出循环
                break
            }
            const left = stack[stack.length - 1] // 新栈顶，当前位置左边比当前柱子矮的位置
            const curWidth = i - left - 1 // 计算宽度
            const curHeight = Math.min(height[left], height[i]) - height[stackTopIdx] // 计算高度
            res += curHeight * curWidth // 计算面积
        }
        stack.push(i)
    }
    return res
};

// dp
// 在每个位置寻找左柱子中的最大高度和右柱子中的最大高度，找到之后，
// 用左右最大高度的较小者减去当前柱子的高度，就是当前位置能接的水量。
// 时间O(n) 空间O(n)
var trap = function (height) {
    const n = height.length
    const leftMax = new Array(n).fill(0)
    leftMax[0] = height[0]
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i - 1])
    }
    const rightMax = new Array(n).fill(0)
    rightMax[n - 1] = height[n - 1]
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i + 1])
    }
    let res = 0
    for (let i = 0; i < n; i++) {
        res += Math.min(rightMax[i], leftMax[i]) - height[i]
    }
    return res
};