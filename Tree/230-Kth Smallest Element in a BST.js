/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    if (!root) return [];
    let res = [];
    midOrder(root, res);
    return res[k - 1];
};

function midOrder(node, arr) {
    if (!node) return [];
    midOrder(node.left, arr);
    arr.push(node.val);
    midOrder(node.right, arr);
}