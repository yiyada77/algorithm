/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    if (!root) return [];
    let stack = [root], res = [];
    while (stack.length > 0) {
        let node = stack.pop();
        if (node) res.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);

    }
    return res;
};