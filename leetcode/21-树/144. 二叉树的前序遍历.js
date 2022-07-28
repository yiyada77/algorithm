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
// 递归
// 时间复杂度O(n),n为节点个树，空间复杂度O(n)，即递归的空间开销(树的高度)，最坏的情况下树是链表，所以是O(n)，平均空间复杂度O(logn)
var preorderTraversal = function (root) {
    const res = []

    const preorder = (node, res) => {
        if (!node) return res
        res.push(node.val)
        preorder(node.left, res)
        preorder(node.right, res)
        return res
    }

    return preorder(root, res)
};

// 迭代
var preorderTraversal = function (root) {
    const res = []
    const stack = []
    let cur = root

    while (cur || stack.length) {
        while (cur) {
            res.push(cur.val)
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        cur = cur.right
    }

    return res
};