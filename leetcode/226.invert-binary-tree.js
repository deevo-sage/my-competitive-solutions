/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
 */

// @lc code=start
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root;
  const inorder = (head) => {
    if (!head) return;
    const temp = new TreeNode(head.val);
    console.log(head.val);
    const left = inorder(head.left);
    if (left) temp.right = left;
    const right = inorder(head.right);
    if (right) temp.left = right;
    return temp;
  };
  return inorder(root);
};
// @lc code=end
