/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    if (!root) {
        let res = new TreeNode(val);
        return res;
    }
    let res = root;
    helper(root, val);
    return res;
};

function helper(node, val) {
    if (val > node.val) {
        if (!node.right) {
            let cur = new TreeNode(val);
            node.right = cur;
        } else {
            return helper(node.right, val);
        }
    } else {
        if (!node.left) {
            let cur = new TreeNode(val);
            node.left = cur;
        } else {
            return helper(node.left, val)
        }
    }
}