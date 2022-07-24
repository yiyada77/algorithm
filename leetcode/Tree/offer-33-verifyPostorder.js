/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    const maxIndex = postorder.length - 1
    if (postorder && maxIndex > 0) {
        let root = postorder[maxIndex]
        //确定左子树
        for (var i = 0; i < maxIndex; i++) {
            if (postorder[i] > root) {
                break
            }
        }
        //判断右子树
        for (let j = i; j < maxIndex; j++) {
            if (postorder[j] < root) {
                return false
            }
        }
        let left = true
        if (i) {
            left = verifyPostorder(postorder.slice(0, i))
        }
        let right = true
        if (i < maxIndex) {
            right = verifyPostorder(postorder.slice(i, maxIndex))
        }
        return left && right
    } else {
        return true
    }
};