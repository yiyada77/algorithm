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
var levelOrder = function (root) {
    let res = []
    let queue = []
    let tempArr = []
    let curNums = 1
    let childNums = 0

    if (root) {
        queue.push(root)
        while (queue.length) {

            const curRoot = queue.shift()
            if (curRoot.left) {
                queue.push(curRoot.left)
                childNums++
            }
            if (curRoot.right) {
                queue.push(curRoot.right)
                childNums++
            }
            tempArr.push(curRoot.val)
            curNums--
            if (curNums === 0) {
                curNums = childNums
                childNums = 0
                res.push(tempArr)
                tempArr = []
            }
        }
    }
    return res
};