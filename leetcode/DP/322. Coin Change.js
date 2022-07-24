/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    let dp=new Array(amount+1).fill(Infinity)
    dp[0]=0

    for(let i=1;i<=amount+1;i++){// dp[i]面额为i时，需要的硬币数
        for(const coin of coins){
            if(i-coin>=0){
                dp[i]=Math.min(dp[i],dp[i-coin]+1)
            }
        }
    }
    return dp[amount]===Infinity?-1:dp[amount]
};