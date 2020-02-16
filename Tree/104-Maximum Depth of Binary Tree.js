/**
 * @param {TreeNode} root
 * @return {number}
 */
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