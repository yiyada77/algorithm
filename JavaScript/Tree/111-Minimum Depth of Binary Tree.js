/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return 0;
    let queue = [root], depth = 1;
    while (queue.length) {
        let tmpQueue = [];
        while (queue.length) {
            let node = queue.shift();
            if (!node.left && !node.right) {
                return depth;
            } else {
                if (node.left) tmpQueue.push(node.left);
                if (node.right) tmpQueue.push(node.right);
            }
        }
        queue = tmpQueue;
        depth++;
    }
    return depth;
};