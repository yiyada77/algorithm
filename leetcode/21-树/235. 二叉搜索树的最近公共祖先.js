/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// 递归
var lowestCommonAncestor = function (root, p, q) {
    // 当 root 大于 p，q 时，p，q 在左子树
    if (root.val > p.val && root.val > q.val) {
        const left = lowestCommonAncestor(root.left, p, q)
        return left !== null && left // 当左子树存在时，返回左子树
    }
    // 当 root 小于 p，q 时，p，q 在右子树
    if (root.val < p.val && root.val < q.val) {
        const right = lowestCommonAncestor(root.right, p, q)
        return right !== null && right // 当右子树存在时，返回右子树
    }
    // 其他情况 root === null || root === p || root === q || p，q 在 root 两侧，都只返回 root
    return root
};
// 迭代
var lowestCommonAncestor = function (root, p, q) {
    while (root) {
        if (root.val > p.val && root.val > q.val) { // 当 root 大于 p，q 时，p，q 在左子树
            root = root.left
        } else if (root.val < p.val && root.val < q.val) { // 当 root 小于 p，q 时，p，q 在右子树
            root = root.right
        } else { // 其他情况 root === null || root === p || root === q || p，q 在 root 两侧，都只返回 root
            return root
        }
    }
    return null
};