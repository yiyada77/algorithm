/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
// dfs
// 时间O(mn) 空间O(mn)
var floodFill = function (image, sr, sc, newColor) {
    const row = image.length
    const col = image[0].length
    const target = image[sr][sc]
    if (target == newColor) return image

    function dfs(x, y) {
        if (x < 0 || x >= row || y < 0 || y >= col || image[x][y] != target) return
        image[x][y] = newColor
        const dx = [-1, 0, 1, 0]
        const dy = [0, 1, 0, -1]
        for (let i = 0; i < dx.length; i++) {
            dfs(x + dx[i], y + dy[i])
        }
    }
    dfs(sr, sc)
    return image
};

// bfs
// 时间O(mn) 空间O(mn) queue的长度
var floodFill = function (image, sr, sc, newColor) {
    const row = image.length
    const col = image[0].length
    const target = image[sr][sc]
    if (target == newColor) return image

    let queue = [[sr, sc]]
    while (queue.length) {
        const [x, y] = queue.shift()
        if (x < 0 || x >= row || y < 0 || y >= col || image[x][y] != target) continue
        image[x][y] = newColor
        queue.push([x - 1, y])
        queue.push([x + 1, y])
        queue.push([x, y - 1])
        queue.push([x, y + 1])
    }
    return image
};