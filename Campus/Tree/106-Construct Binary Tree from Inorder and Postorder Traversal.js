/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    if (!inorder.length) {
        return null;
    } else {
        const val = postorder.pop();
        const idx = inorder.indexOf(val);
        let node = new TreeNode(val);
        node.right = buildTree(inorder.slice(idx + 1), postorder);
        node.left = buildTree(inorder.slice(0, idx), postorder);
        return node;
    }
};