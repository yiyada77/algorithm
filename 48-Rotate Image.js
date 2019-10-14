matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
n = matrix.length;

for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
        let tmp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = tmp;
    }
}
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
        let tmp = matrix[i][j];
        matrix[i][j] = matrix[i][n + 1 - j];
        matrix[i][n + 1 - j] = tmp;
    }
}
