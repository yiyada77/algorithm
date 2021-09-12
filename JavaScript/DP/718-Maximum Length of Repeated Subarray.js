function findLength(A, B) {
    let m = A.length + 1;
    let n = B.length + 1;
    let res = 0;
    let i, j;
    let dp = [];

    for (i = 0; i < m; i++) {
        let arr = new Array(n).fill(0);
        dp.push(arr);
    }
    for (i = 1; i < m; i++) {
        for (j = 1; j < n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0
            } else if (A[i - 1] === B[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                res = Math.max(res, dp[i][j]);
            } else {
                dp[i][j] = 0;
            }
        }
    }
    return res;
};