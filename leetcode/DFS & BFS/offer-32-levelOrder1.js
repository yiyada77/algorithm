/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
    let res = []
    let queue = []
    while (root || queue.length) {
        if (root.left) {
            queue.push(root.left)
        }
        if (root.right) {
            queue.push(root.right)
        }
        res.push(root.val)
        root = queue.shift()
    }
    return res
};