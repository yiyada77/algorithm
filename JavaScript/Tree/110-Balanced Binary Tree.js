/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) return true;
    if (Math.abs(maxDepth(root.left) - maxDepth(root.right)) > 1) return false;
    return isBalanced(root.left) && isBalanced(root.right);
};

var maxDepth = function (root) {
    if (!root) return 0;
    let queue = [root], depth = 0;
    while (queue.length) {
        let tmpQuene = [];
        while (queue.length) {
            let node = queue.shift();
            if (node.left) tmpQuene.push(node.left);
            if (node.right) tmpQuene.push(node.right);
        }
        queue = tmpQuene;
        depth++;
    }
    return depth;
};