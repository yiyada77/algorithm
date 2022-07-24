/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

// dp 时间O(mn) 空间O(mn)
var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0]) {//出师不利，直接堵死
        return 0
    }

    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    let grid = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0))
    grid[1][1] = 1

    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if (i === 1 && j === 1) {
                continue
            }
            grid[i][j] = obstacleGrid[i - 1][j - 1] === 0 ? grid[i - 1][j] + grid[i][j - 1] : 0 //1为障碍物，0为通路
        }
    }
    return grid[m][n]
};

// 状态压缩
// 时间O(mn) 空间O(n)
var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0]) {//出师不利，直接堵死
        return 0
    }

    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    const dp = new Array(n).fill(0)
    dp[0] = 1

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {//障碍物
                dp[j] = 0
            } else if (j > 0) {//通路
                dp[j] += dp[j - 1]
            }
        }
    }
    return dp[n - 1]
};