/**
给定一个 n × n 的二维矩阵表示一个图像。
将图像顺时针旋转 90 度。
说明：
你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。
请不要使用另一个矩阵来旋转图像。
 */
/**
思路：
沿左上右下对角线交换矩阵，再沿左边反转
O(n^2);
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function rotate(matrix) {
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
}





