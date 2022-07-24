/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid[0][0]){//出师不利，直接堵死
        return 0
    }

    const m=obstacleGrid.length
    const n=obstacleGrid[0].length
    let grid=Array.from(new Array(m+1),()=>new Array(n+1).fill(0))
    grid[1][1]=1
    
    for(let i=1;i<m+1;i++){
        for(let j=1;j<n+1;j++){
            if(i===1&&j===1){
                continue
            }
            if(obstacleGrid[i-1][j-1]===0){//通路
                grid[i][j]=grid[i-1][j]+grid[i][j-1]
            }else{//障碍
                grid[i][j]=0
            }
        }
    }
    return grid[m][n]
};