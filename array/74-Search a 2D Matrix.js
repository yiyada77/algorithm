let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]];
let target = 3;

if (matrix.length == 0) {
    console.log('false1');
}
let m = matrix.length;
let n = matrix[0].length;
let row = 0;
let col = n - 1;

while (row < m && col >= 0) {
    if (target == matrix[row][col]) {
        console.log(true);
    }
    if (target < matrix[row][col]) {
        col--;
    } else {
        row++;
    }
}
console.log('false2');