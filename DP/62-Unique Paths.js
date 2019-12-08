function uniquePath(m, n) {
    let board = new Array();
    for (let i = 0; i < m; i++) {
        board[i] = new Array();
        for (let j = 0; j < n; j++) {
            board[i][j] = 1;
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            board[i][j] = board[i - 1][j] + board[i][j - 1];
        }
    }
    return board[m - 1][n - 1];
}

function uniquePathOptimize(m, n) {
    let board = new Array(n).fill(1);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            board[j] = board[j - 1] + board[j]
        }
    }
    return board[n - 1];
}