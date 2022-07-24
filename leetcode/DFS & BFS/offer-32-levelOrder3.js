/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    let res=[]
    let oddStack=[]
    let evenStack=[]
    let tempArr=[]
    if(root){
        oddStack.push(root)
        while(oddStack.length||evenStack.length){
            while(oddStack.length){
                const curRoot=oddStack.pop()
                if(curRoot.left){
                    evenStack.push(curRoot.left)
                }
                if(curRoot.right){
                    evenStack.push(curRoot.right)
                }
                tempArr.push(curRoot.val) 
            }
            if(tempArr.length){
                res.push(tempArr)
                tempArr=[]
            }

            while(evenStack.length){
                const curRoot=evenStack.pop()
                if(curRoot.right){
                    oddStack.push(curRoot.right)
                }
                if(curRoot.left){
                    oddStack.push(curRoot.left)
                }
                tempArr.push(curRoot.val)   
            }
            if(tempArr.length){
                res.push(tempArr)
                tempArr=[]
            }
        }   
    }
    return res
};