function uniquePath2(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let i, j;
    if (matrix[0][0] === 1) {
        return 0;
    } else {
        matrix[0][0] = 1;
    }
    for (j = 1; j < n; j++) {
        if (matrix[0][j] === 1) {
            matrix[0][j] = 0
        } else {
            matrix[0][j] = matrix[0][j - 1];
        }
    }
    for (i = 1; i < m; i++) {
        if (matrix[i][0] === 1) {
            matrix[i][0] = 0
        } else {
            matrix[i][0] = matrix[i - 1][0];
        }
    }
    for (i = 1; i < m; i++) {
        for (j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][j] = matrix[i][j - 1] + matrix[i - 1][j];
            } else {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix[m - 1][n - 1];
}