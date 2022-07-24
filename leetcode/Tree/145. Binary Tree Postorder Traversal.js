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
//left->right->root
//递归实现
var postorderTraversal = function (root) {
    let resArr = []
    postorderHelper(root, resArr)
    return resArr
};

function postorderHelper(node, arr) {
    if (node) {
        postorderHelper(node.left, arr)
        postorderHelper(node.right, arr)
        arr.push(node.val)
    }
    return arr
}
//非递归实现
var postorderTraversal = function (root) {
    let resArr = []
    let stack = []
    let cur = root
    let pre = null
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack[stack.length - 1]
        if (!cur.right || cur.right == pre) {
            cur = stack.pop()
            resArr.push(cur.val)
            pre = cur
            cur = null
        } else {
            cur = cur.right
        }
    }
    return resArr
};