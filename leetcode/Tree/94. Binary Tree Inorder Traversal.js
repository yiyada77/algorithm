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
//left->root->right
// 递归实现
var inorderTraversal = function(root) {
    let resArr=[]
    inorderHelper(root,resArr)
    return resArr
};

function inorderHelper(node,arr){
    if(node){
        inorderHelper(node.left,arr)
        arr.push(node.val)
        inorderHelper(node.right,arr)
    }
    return arr
}
//非递归实现
var inorderTraversal = function(root) {
    let resArr=[]
    let stack=[]
    let cur=root
    while(cur||stack.length){
        while(cur){
            stack.push(cur)
            cur=cur.left
        }
        cur=stack.pop()
        resArr.push(cur.val)
        cur=cur.right
    }
    return resArr
};