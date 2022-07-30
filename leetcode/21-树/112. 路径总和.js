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
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false

    if (root.left === null && root.right === null) { // 遍历到叶子节点
        return targetSum - root.val === 0 // targetSum 正好减少到0，返回 true 否则返回 false 
    }
    // 递归左右子树，有一个返回 true 就找到了一条这样的路径
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};