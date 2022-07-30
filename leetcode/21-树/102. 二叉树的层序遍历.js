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
// 思路：
// 准备一个队列，将根节点加入队列，当队列不为空的时候循环队列，
// 每次循环拿到当前队列的大小，在循环当前层的每个元素，然后加入输出数组res中，
// 如果这个元素存在左右节点则将左右节点加入队列
// 复杂度分析：
// 时间复杂度 O(n)，每个点进队出队各一次，故渐进时间复杂度为 O(n)。
// 空间复杂度O(n)，队列中元素的个数不超过 n 个
var levelOrder = function (root) {
    const res = []
    if (!root) return res

    const queue = [root] // 初始队列
    while (queue.length) {
        const curLevelSize = queue.length // 当前层的节点数
        res.push([]) // 在遍历当前层之前，初始化一个空数组用于保存节点值
        for (let i = 0; i < curLevelSize; i++) {
            const node = queue.shift()
            res.at(-1).push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }

    return res
};