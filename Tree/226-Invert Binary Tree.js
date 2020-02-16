/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (root) {
        let tmpNode = invertTree(root.right);
        root.right = invertTree(root.left);
        root.left = tmpNode;
    }
    return root;
};