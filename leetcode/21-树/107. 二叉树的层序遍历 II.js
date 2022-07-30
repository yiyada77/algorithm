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
 * @return {number[][]}
 */

// 跟 102 一样，只是下一层遍历的节点值从数组头部保存
var levelOrderBottom = function (root) {
    const res = []
    if (!root) return res

    const queue = [root]
    while (queue.length) {
        const curLevelSize = queue.length
        res.unshift([])
        for (let i = 0; i < curLevelSize; i++) {
            const node = queue.shift()
            res[0].push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }

    return res
};