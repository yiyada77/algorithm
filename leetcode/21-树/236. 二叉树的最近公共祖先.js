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
/**
 * 思路：分四种情况，
 * 1.root是null或者root等于p或q，说明root是p，q的公共祖先，
 * 2.递归左右子树，如果左右子树递归函数返回的都不为空，则root就是p，q的公共祖先，
 * 3.左子树递归函数返回的值为空，则p，q都在右子树，
 * 4.右子树递归函数返回的值为空，则p，q都在左子树
 * 复杂度分析：时间复杂度 : O(n)，n是二叉树节点的个树，空间复杂度 : O(n)，n是递归的层
 */
var lowestCommonAncestor = function (root, p, q) {
    // 只要当前根节点是p和q中的任意一个，就返回（因为不能比这个更深了，再深p和q中的一个就没了）
    if (root === null || root === p || root === q) {
        return root
    }
    // 根节点不是p和q中的任意一个，那么就继续分别往左子树和右子树找p和q
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)
    // p和q都没找到，那就没有
    if (left === null && right === null) {
        return null
    }
    // 左子树没有p也没有q，就返回右子树的结果
    if (left === null) {
        return right
    }
    // 右子树没有p也没有q，就返回左子树的结果
    if (right === null) {
        return left
    }
    // 左右子树都找到p和q了，那就说明p和q分别在左右两个子树上，所以此时的最近公共祖先就是root
    return root
};