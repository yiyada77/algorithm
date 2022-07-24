/**
 * @param {number[]} heights
 * @return {number}
 */

// 首先，要想找到第 i 位置最大面积是什么？
// 是以 i 为中心，向左找第一个小于 heights[i] 的位置 left_i；
// 向右找第一个小于 heights[i] 的位置 right_i，
// 即最大面积为 heights[i] * (right_i - left_i -1)
// 维护一个单调递增栈即栈内元素保持单调递增的栈
// 如果新的元素比栈顶元素大，就入栈
// 如果新的元素较小，那就一直把栈内元素弹出来，直到栈顶比新元素小
// 当元素出栈时，说明这个新元素是出栈元素向后找第一个比其小的元素 right_i
// 当元素出栈后，说明新栈顶元素是出栈元素向前找第一个比其小的元素 left_i
// 时间O(n) 空间O(n)
// 复杂度：时间复杂度O(n)，n是heights的长度，数组里每个元素尽出栈一次。空间复杂度O(n)，栈空间最多为n
var largestRectangleArea = function (heights) {
    let maxArea = 0
    const stack = []
    heights = [0, ...heights, 0]
    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
            // 栈顶元素大于新元素，弹出栈顶 stackTopIdex
            // 此时新元素 i ，是出栈元素 stackTopIdex 右边第一个比它小的元素
            // 此时的新栈顶元素 stack[stack.length-1] ，是弹出元素 stackTopIdex 左边第一个比它小的元素
            const stackTopIdex = stack.pop()
            maxArea = Math.max(
                maxArea,
                heights[stackTopIdex] * (i - stack[stack.length - 1] - 1)
            )
        }
        stack.push(i)
    }
    return maxArea
};