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
var postorderTraversal = function (root) {
    const res = []

    const postorder = (node, res) => {
        if (!node) return res
        postorder(node.left, res)
        postorder(node.right, res)
        res.push(node.val)
        return res
    }

    return postorder(root, res)
};

var postorderTraversal = function (root) {
    const res = [],
        stack = []
    let cur = root,
        pre = null

    while (cur || stack.length) {
        while (cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.at(-1)
        if (!cur.right || cur.right === pre) {
            stack.pop()
            res.push(cur.val)
            pre = cur
            cur = null
        } else {
            cur = cur.right
        }
    }

    return res
};