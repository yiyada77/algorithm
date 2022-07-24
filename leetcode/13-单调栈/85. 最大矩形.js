/**
 * @param {character[][]} matrix
 * @return {number}
 */

// 思路:
// 将每一行和这行之前的行作为柱状图的横纵坐标
// 叠加每一个x的y，可以转换为84题，
// 循环每一行，使用84的单调栈算法，可以得到最大值
// 时间O(mn) 空间O(n)
var maximalRectangle = function (matrix) {
    const rows = matrix.length
    const cols = matrix[0].length
    let maxArea = 0
    const heights = new Array(cols).fill(0)
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] == '1') {
                heights[j] += 1
            } else {
                heights[j] = 0
            }
        }
        maxArea = Math.max(
            maxArea,
            largestRectangleArea(heights)
        )
    }
    return maxArea
};

function largestRectangleArea(heights) {
    let maxArea = 0
    const stack = []
    heights = [0, ...heights, 0]
    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
            const stackTopIndex = stack.pop()
            maxArea = Math.max(
                maxArea,
                heights[stackTopIndex] * (i - stack[stack.length - 1] - 1)
            )
        }
        stack.push(i)
    }
    return maxArea
}