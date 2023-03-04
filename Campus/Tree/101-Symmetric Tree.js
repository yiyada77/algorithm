/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true;
    return helper(root.left, root.right);
};

function helper(nodeA, nodeB) {
    if (nodeA === null && nodeB === null) return true;
    if (nodeA === null || nodeB === null) return false;
    return nodeA.val === nodeB.val && helper(nodeA.left, nodeB.right) && helper(nodeA.right, nodeB.left);
}