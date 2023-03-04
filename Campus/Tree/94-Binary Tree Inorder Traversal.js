/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let res = [];
    inorderHelper(root, res);
    return res;
};

function inorderHelper(node, arr) {
    if (node) {
        if (node.left) inorderHelper(node.left, arr);
        arr.push(node.val);
        if (node.right) inorderHelper(node.right, arr);
    }
}

function inorderTraversal(root) {
    let res = [];
    if (!root) return [];
    let stack = [];
    let node=root;
    while (stack.length>0||node!==null) {
        if(node){
            stack.push(node);
            node=node.left;
        }else{
            let cur=stack.pop();
            res.push(cur.val);
            node=cur.right;
        }
    }
    return res;
}