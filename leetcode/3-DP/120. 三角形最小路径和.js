/**
 * @param {number[][]} triangle
 * @return {number}
 */

// 思路：从三角形最后一层开始向上遍历，每个数字的最小路径和是它下面两个数字中的较小者加上它本身
// 时间O(mn) 空间O(mn)
var minimumTotal = function (triangle) {
    const h = triangle.length
    const dp = new Array(h)
    for (let i = 0; i < h; i++) {
        dp[i] = new Array(triangle[i].length)
    }

    for (let i = h - 1; i >= 0; i--) {//自底而上遍历
        for (let j = 0; j < triangle[i].length; j++) {//同一层
            if (i === h - 1) {//最底层
                dp[i][j] = triangle[i][j]
            } else {//状态转移方程，上一层由它下面一层计算出
                dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]
            }
        }
    }
    return dp[0][0]
};

// 状态压缩
// 时间O(mn) 空间O(n)
var minimumTotal = function (triangle) {
    const h = triangle.length
    const bottom = triangle[h - 1]
    const dp = new Array(bottom.length)

    for (let i = 0; i < bottom.length; i++) {
        dp[i] = bottom[i]
    }

    for (let i = h - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
        }
    }
    return dp[0]
};