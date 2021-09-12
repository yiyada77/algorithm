function maximalSquare(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let dp = [];
    let res = 0;
    let i, j;

    for (i = 0; i < m; i++) {
        let arr = new Array(n).fill(0);
        dp.push(arr);
    }

    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            dp[i][j] = matrix[i][j];
            if (i * j * dp[i][j]) {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
            }
            res = Math.max(res, dp[i][j]);
        }
    }
    
    return res * res;
}