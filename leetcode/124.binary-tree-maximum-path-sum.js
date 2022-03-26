/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
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
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = root.val;
  const preorder = (head) => {
    if (!head) return;
    const left = preorder(head.left);
    const right = preorder(head.right);
    if (!left && !right) {
      max = Math.max(max, head.val);
      return head.val;
    }
    if (!left) {
      const temp = Math.max(right + head.val, head.val);
      max = Math.max(temp, max);
      return temp;
    }
    if (!right) {
      const temp = Math.max(left + head.val, head.val);
      max = Math.max(temp, max);
      return temp;
    }
    const temp = Math.max(left + head.val, right + head.val, head.val);
    max = Math.max(temp, max, head.val + left + right);
    return temp;
  };
  preorder(root);
  return max;
};
// @lc code=end
