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

// bfs 层序遍历，每一层的最后一个节点的值将被观察到
// 复杂度：时间复杂度O(n)，每个节点遍历一次。空间复杂度O(n)，队列的空间
var rightSideView = function (root) {
    const res = []
    if (!root) return res

    const queue = [root]
    while (queue.length) {
        const curLevelSize = queue.length

        for (let i = 0; i < curLevelSize; i++) {
            const node = queue.shift()
            if (i === curLevelSize - 1) { // 每层最后一个节点，加入返回值
                res.push(node.val)
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return res
};