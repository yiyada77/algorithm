/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 思路：从根节点递归，每次递归分为走左边、右边、不动 3种情况，用当前节点加上左右子树最大路径和不断更新最大路径和
// 时间O(n) 空间O(n)，n为树的节点个数
var maxPathSum = function (root) {
    let maxSum = -Infinity // 初始化最大路径和 
    const dfs = (root) => {
        if (root === null) { //遍历节点是null 返回0
            return 0
        }
        const left = dfs(root.left) //递归左子树最大路径和
        const right = dfs(root.right) //递归右子树最大路径和

        maxSum = Math.max(maxSum, left + root.val + right) //更新最大值
        //返回当前子树的路径和 分为走左边、右边、不动 3种情况
        const pathSum = root.val + Math.max(left, 0, right)
        return pathSum > 0 ? pathSum : 0
    }
    dfs(root)
    return maxSum
};