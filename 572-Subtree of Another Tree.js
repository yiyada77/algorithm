/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
    if (!s) return false;
    if (isSameTree(s, t)) return true;
    return isSubtree(s.left, t) || isSubtree(s.right, t);
};

function isSameTree(node1, node2) {
    if (!node1 && !node2) return true;
    if (node1 && node2) {
        return (node1.val === node2.val) && isSameTree(node1.left, node2.left) && isSameTree(node1.right, node2.right)
    }
    return false;
}