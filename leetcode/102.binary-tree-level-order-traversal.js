/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let arr = [];
  let d = -1;
  const inOrder = (head) => {
    if (!head) return;
    d++;
    if (arr[d]?.length) {
      arr[d].push(head.val);
    } else {
      arr[d] = [head.val];
    }
    inOrder(head.left);
    inOrder(head.right);
    d--;
  };
  inOrder(root);
  return arr;
};
// @lc code=end
