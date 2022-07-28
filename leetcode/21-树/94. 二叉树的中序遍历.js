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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const res = []

    const inorder = (node, res) => {
        if (!node) return res
        inorder(node.left, res)
        res.push(node.val)
        inorder(node.right, res)
        return res
    }

    return inorder(root, res)
};

var inorderTraversal = function (root) {
    const res = []
    const stack = []
    let cur = root

    while (cur || stack.length) {
        while (cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        res.push(cur.val)
        cur = cur.right
    }

    return res
};