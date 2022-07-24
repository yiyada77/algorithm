/**
 * @param {number[][]} grid
 * @return {number}
 */

// 时间O(mn) 空间O(1)
var minPathSum = function (grid) {
    const m = grid.length
    const n = grid[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j !== 0) {
                grid[0][j] += grid[0][j - 1]
            } else if (i !== 0 && j === 0) {
                grid[i][0] += grid[i - 1][0]
            } else if (i !== 0 && j !== 0) {
                grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
            }
        }
    }
    return grid[m - 1][n - 1]
};