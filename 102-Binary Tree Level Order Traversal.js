/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let res = [], queue = [root];
    while (queue.length) {
        let arr = [], tmpQuene = [];
        while (queue.length) {
            node = queue.shift();
            arr.push(node.val);
            if (node.left) tmpQuene.push(node.left);
            if (node.right) tmpQuene.push(node.right);
        }
        queue = tmpQuene;
        res.push(arr);
    }
    return res;
};