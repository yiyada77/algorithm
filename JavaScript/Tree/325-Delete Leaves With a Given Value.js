/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
    if (!root) return root;
    let fn = (root) => {
        if (!root) return root;
        root.left = fn(root.left, target);
        root.right = fn(root.right, target);
        if (root.val === target && !root.right && !root.left) {
            return null;
        } else {
            return root;
        }
    }
    return fn(root);
};