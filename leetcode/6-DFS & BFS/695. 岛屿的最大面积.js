/**
 * @param {number[][]} grid
 * @return {number}
 */

// DFS
// 思路：深度优先，先循环网格， 
// 当grid[x][y] === 1时，
// 将当前单元格置为0并上下左右不断递归，
// 计算每个岛屿的大小，然后不断更新最大岛屿
// 时间O(mn) 空间O(mn)递归的最大深度
var maxAreaOfIsland = function (grid) {
    const row = grid.length
    const col = grid[0].length

    function dfs(x, y) {
        if (x < 0 || x >= col || y < 0 || y >= row || grid[y][x] == 0) return 0
        // 数组越界，直接返回0
        grid[y][x] = 0 // 当前位置已在res=1时被记录，所以清零
        let res = 1
        const dx = [-1, 0, 1, 0] // 当前点的左上右下的四个位置
        const dy = [0, 1, 0, -1]
        for (let i = 0; i < dx.length; i++) {
            res += dfs(x + dx[i], y + dy[i])
        }
        return res
    }

    let ans = 0
    for (let i = 0; i < row; i++) { // y
        for (let j = 0; j < col; j++) { // x
            ans = Math.max(ans, dfs(j, i))
        }
    }
    return ans
};

// BFS
// 思路：广度优先，循环网格，不断将当前网格的坐标加入队列，
// 如果当前网格对应的值是1，则置为0，然后向四周扩散，
// 找到下一层的网格坐标，加入队列，直到队列为空
// 时间O(mn) 空间O(mn) queue的长度
var maxAreaOfIsland = function (grid) {
    const row = grid.length
    const col = grid[0].length
    const dx = [-1, 0, 1, 0]
    const dy = [0, 1, 0, -1]
    let res = 0

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == 0) continue
            let ans = 0
            let queue = [[i, j]]
            while (queue.length) {
                const [x, y] = queue.shift()
                if (x < 0 || x >= row || y < 0 || y >= col || grid[x][y] == 0) continue
                ans++
                grid[x][y] = 0
                for (let pos = 0; pos < dx.length; pos++) {
                    queue.push([x + dx[pos], y + dy[pos]])
                }
            }
            res = Math.max(res, ans)
        }
    }
    return res
}
