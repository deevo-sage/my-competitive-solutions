/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) return true;
  let isValid = true;
  const iorder = (head) => {
    if (!head) return;
    const left = iorder(head.left);
    let leftmin, leftmax;
    if (left) {
      leftmin = left[0];
      leftmax = left[1];
    }
    if (left && leftmax >= head.val) {
      isValid = false;
    }
    const right = iorder(head.right);
    let rightmin, rightmax;
    if (right) {
      rightmin = right[0];
      rightmax = right[1];
    }
    if (right && rightmin <= head.val) {
      isValid = false;
    }
    if (!left && !right) return [head.val, head.val];
    if (!left)
      return [
        Math.min(rightmin, rightmax, head.val),
        Math.max(rightmin, rightmax, head.val),
      ];
    if (!right)
      return [
        Math.min(leftmin, leftmax, head.val),
        Math.max(leftmin, leftmax, head.val),
      ];
    return [
      Math.min(rightmin, rightmax, leftmin, leftmax, head.val),
      Math.max(rightmin, rightmax, leftmin, leftmax, head.val),
    ];
  };
  iorder(root);
  return isValid;
};
// @lc code=end
