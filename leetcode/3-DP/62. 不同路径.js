/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// 思路:由于在每个位置只能向下或者向右， 
// 所以每个坐标的路径和等于上一行相同位置和上一列相同位置不同路径的总和，
// 状态转移方程：f[i][j] = f[i - 1][j] + f[i][j - 1];
// 时间O(mn) 空间O(mn)
var uniquePaths = function (m, n) {
    let grid = Array.from(new Array(m), () => new Array(n).fill(1))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j !== 0) {// 第一行只能从j-1过来，路径为1
                // grid[i][j]=grid[i][j-1]
                // grid[0][j]=1
                continue
            } else if (i !== 0 && j === 0) {// 第一列只能从i-1过来，路径为1
                // grid[i][j]=grid[i-1][j]
                // grid[i][j]=1
                continue
            } else if (i !== 0 && j !== 0) {
                grid[i][j] = grid[i][j - 1] + grid[i - 1][j]
            }
        }
    }
    return grid[m - 1][n - 1]
};

// 状态压缩
// 时间O(mn) 空间O(n)
var uniquePaths = function (m, n) {
    let grid = new Array(n).fill(1)//i=0的初始状态
    for (let i = 1; i < m; i++) {//i代表每一行，状态压缩的外圈循环为每一行，内圈循环为i行的每一列与前一列叠加的路径数
        for (let j = 1; j < n; j++) {
            grid[j] = grid[j - 1] + grid[j]
        }
    }
    return grid[n - 1]
};
