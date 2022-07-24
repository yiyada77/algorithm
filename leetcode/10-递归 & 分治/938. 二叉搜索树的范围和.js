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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// dfs
// 时间O(n) 空间O(n)
var rangeSumBST = function (root, low, high) {
    if (root == null) return 0
    if (root.val > high) {
        return rangeSumBST(root.left, low, high)
    }
    if (root.val < low) {
        return rangeSumBST(root.right, low, high)
    }
    return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)
};

// bfs
// 时间O(n) 空间O(n)
var rangeSumBST = function (root, low, high) {
    let sum = 0
    const queue = [root]
    while (queue.length) {
        const cur = queue.shift()
        if (cur == null) {
            continue
        }
        if (cur.val > high) {
            queue.push(cur.left)
        } else if (cur.val < low) {
            queue.push(cur.right)
        } else {
            queue.push(cur.left)
            queue.push(cur.right)
            sum += cur.val
        }
    }
    return sum
};