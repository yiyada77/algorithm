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
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return 0
    // 这道题递归条件里分为三种情况
    // 1.左孩子和右孩子都为空的情况，说明到达了叶子节点，直接返回1即可
    if (!root.left && !root.right) return 1
    // 2.如果左孩子和右孩子其中一个为空，那么需要返回比较大的那个孩子的深度  
    const right = minDepth(root.right) // left === null
    const left = minDepth(root.left) // right === null
    // 这里其中一个节点为空，说明 left 和 right 有一个必然为0，所以可以返回 left + right + 1;
    if (!root.left || !root.right) return left + right + 1
    // 3.最后一种情况，也就是左右孩子都不为空，返回最小深度+1即可
    return Math.min(left, right) + 1
};

// 本题是以当前节点root为参照物，如果 root===null，表明没有这一层，所以深度贡献为0
// root 为叶子结点的时候表明深度到此为止，所以深度贡献被本身1
// 如果有孩子节点，则深度为孩子节点的深度+1，之所以+1是因为孩子树的根节点是 当前节点的 root.left/root.right
