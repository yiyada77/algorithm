matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];

let m = new Array(matrix.length);
let n = new Array(matrix[0].length);

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] == 0) {
            m[i] = 0;
            n[j] = 0;
        }
    }
}

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
        if (m[i] == 0 || n[j] == 0) {
            matrix[i][j] = 0;
        }
    }
}

