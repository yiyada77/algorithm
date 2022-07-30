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
 * @return {string[]}
 */

//  方法1:dfs
//  思路：递归左右子树，直到叶子节点，递归的过程中不断透传path，递归的每一层连接上当前节点的值
//  复杂度：时间复杂度O(n)，每个节点遍历一次。空间复杂度O(n)，递归栈空间
var binaryTreePaths = function (root) {
    const res = []

    const dfs = (node, path) => { // 传入递归的节点和路径
        if (node) {
            path += node.val.toString()
            if (!node.left && !node.right) { // 当前节点是叶子节点，找到一条路径
                res.push(path)
            } else { // 不是叶子节点继续递归
                path += '->'
                dfs(node.left, path)
                dfs(node.right, path)
            }
        }
    }

    dfs(root, "")
    return res
};