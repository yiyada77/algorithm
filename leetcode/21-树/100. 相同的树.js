/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
//  dfs递归
//  思路：递归比较左右子树
//  复杂度：时间复杂度O(n)，n是节点较少的树中的节点个数，递归有一个节点为null，另一个不为null就停止递归，空间复杂度O(n),递归深度不会超过节点个数
var isSameTree = function (p, q) {
    if (p === null && q === null) return true
    if (p === null || q === null) return false
    if (p.val !== q.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};