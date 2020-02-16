/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    if (!root) return [];
    let res = [];
    helper(root, res);
    return res;
};

function helper(node, arr) {
    if (!node) return [];
    helper(node.left, arr);
    helper(node.right, arr);
    arr.push(node.val);
}