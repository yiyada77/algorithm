/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!inorder.length) {
        return null
    } else {
        const val = preorder.shift();
        const idx = inorder.indexOf(val);
        let node = new TreeNode(val);
        node.left = buildTree(preorder, inorder.slice(0, idx));
        node.right = buildTree(preorder, inorder.slice(idx + 1));
        return node;
    }
};