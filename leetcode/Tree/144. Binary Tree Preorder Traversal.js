/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//root->left->right
//递归实现
 var preorderTraversal = function(root) {
    let resArr=[]
    preorderHelper(root,resArr)
    return resArr
};

function preorderHelper(node,arr){
    if(node){
        arr.push(node.val)
        preorderHelper(node.left,arr)
        preorderHelper(node.right,arr)
    }
    return arr
}
//非递归实现
var preorderTraversal = function(root) {
    let resArr=[]
    let stack=[]
    let cur=root
    while(cur||stack.length){
        while(cur){
            resArr.push(cur.val)
            stack.push(cur)
            cur=cur.left
        }
        cur=stack.pop()
        cur=cur.right
    }
    return resArr
};