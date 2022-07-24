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
 * @return {boolean}
 */
var isBalanced = function (root) {
    return helper(root) != -1
};

function helper(node) {
    if (!node) {
        return 0
    }
    const left = helper(node.left)
    const right = helper(node.right)
    if (left == -1 || right == -1 || Math.abs(left - right) > 1) {
        return -1
    }
    return Math.max(left, right) + 1
}