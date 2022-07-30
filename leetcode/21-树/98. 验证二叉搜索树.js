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
 * @return {boolean}
 */
// 递归
/**
 * 思路：
 * 利用二叉搜索树的性质，每个节点都大于它左子树所有节点，小于右子树上所有节点，并且每个节点左右子树不为空，
 * 那它的左右子树也是二叉搜索树。我们可以递归验证每个节点的左右子树。
 * 复杂度分析：
 * 时间复杂度 : O(n)，n是二叉树节点的个树。
 * 空间复杂度 : O(n)，n是递归的层数，最差的情况下二叉树是一条链，树高n，也就是总共n层
 */
var isValidBST = function (root, min = -Infinity, max = Infinity) {
    if (root === null) {
        return true
    }
    if (root.val <= min || root.val >= max) { // 终止条件 不满足二叉搜索树的性质
        return false
    }
    // 递归左右子树
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
};
// 中序遍历 + 迭代
// 思路：中序遍历出的数组是一个递增数组，所以arr[i-1]<arr[i]
// 当 arr[i] <= arr[i-1] 时，必定不是递增数组
var isValidBST = function (root) {
    let lastVal = -Infinity
    let stack = []

    while (root || stack.length) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        if (root.val <= lastVal) {
            return false
        }
        lastVal = root.val
        root = root.right
    }
    return true
};