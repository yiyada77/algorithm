/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
function deleteNode(root, key) {
    if (!root) return root;
    if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key);
    } else {
        if (root.left === null && root.right === null) {//node为叶子结点
            return null;
        } else if (root.left !== null && root.right === null) {//node没有左子树
            root = root.left;
        } else if (root.left === null && root.right !== null) {//node没有右子树
            root = root.right;
        } else {//双边有子树
            let cur = root.right;
            while (cur.left !== null) {
                cur = cur.left;
            }
            cur.left = root.left;
            root = root.right;
        }
    }
    return root;
}