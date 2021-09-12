board = [[1, 2, 4, 7, 0, 1], [5, 3, 9, 1, 2, 1], [7, 4, 6, 9, 0, 3]];
result = board;
const m = result.length;
const n = result[0].length;
let i, j, left, mid, right;

for (i = 1; i < m; i++) {
    for (j = 0; j < n; j++) {
        if (j === 0) {
            left = 0;
        } else {
            left = result[i - 1][j - 1];
        }
        mid = result[i - 1][j];
        if (j === n - 1) {
            right = 0;
        } else {
            right = result[i - 1][j + 1];
        }
        result[i][j] = Math.max(left, mid, right) + result[i][j];
    }
}

console.log(Math.max.apply(Math,result[m - 1]));
