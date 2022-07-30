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
 * @param {number} targetSum
 * @return {number}
 */

//  方法1:dfs
//  思路：递归左右子树，在递归的子阶段中，继续以该节点为根节点继续进行路径的寻找
//  复杂度：时间复杂度O(n^2)，所有节点都要遍历一边，还要寻找以该节点为根的子树中是否存在符合条件的路径。
//         空间复杂度O(n)，递归空间

var pathSum = function (root, targetSum) { // 外圈遍历
    if (!root) return 0

    let count = rootSum(root, targetSum) // 以 root 为根节点的树中寻找路径
    count += pathSum(root.left, targetSum) // 递归左子树，在左子树中寻找路径
    count += pathSum(root.right, targetSum) // 递归右子树，在左子树中寻找路径

    return count
};
// 内圈遍历
function rootSum(root, targetSum) { // dfs - 以 root 为根节点的树中寻找路径
    if (!root) return 0

    let count = 0
    const rootVal = root.val
    if (rootVal === targetSum) { // 节点本身 = targetSum 也可以形成一个长度为1的路径
        count++
    }

    count += rootSum(root.left, targetSum - rootVal) // 以 root.left 为根节点，targetSum - val 为寻找的路径和，继续寻找路径
    count += rootSum(root.right, targetSum - rootVal) // 以 root.right 为根节点，targetSum - val 为寻找的路径和，继续寻找路径 

    return count
}