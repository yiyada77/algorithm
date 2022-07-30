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

// dfs
// 时间O(n) n 是节点数 空间O(s) s 是树的高度
var maxDepth = function (root, lv = 0) {
    if (!root) {
        return lv
    } else {
        const left = maxDepth(root.left, lv)
        const right = maxDepth(root.right, lv)
        return Math.max(left, right) + 1
    }
};