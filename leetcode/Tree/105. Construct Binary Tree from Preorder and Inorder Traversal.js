/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length == 0) {
        return null
    }
    if (preorder.length == 1) {
        return new TreeNode(preorder[0])
    }

    const nodeVal = preorder[0]
    const index = inorder.indexOf(nodeVal)
    const leftInInorder = inorder.slice(0, index)
    const rightInInorder = inorder.slice(index + 1)
    const leftInPreorder = preorder.slice(1, leftInInorder.length + 1)
    const rightInPreorder = preorder.slice(leftInInorder.length + 1)
    let node = new TreeNode(nodeVal)
    node.left = buildTree(leftInPreorder, leftInInorder)
    node.right = buildTree(rightInPreorder, rightInInorder)

    return node
};