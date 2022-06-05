/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 */

// @lc code=start

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const getIdx = (val, arr) => {
  for (let i in arr) {
    if (arr[i] === val) return i;
  }
};
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let head = new TreeNode(preorder[0]);
  const putVal = (val, head) => {
    if (!head) return new TreeNode(val);
    const headIdx = getIdx(head.val, inorder);
    const valIdx = getIdx(val, inorder);
    if (valIdx < headIdx) head.left = putVal(val, head.left);
    if (valIdx > headIdx) head.right = putVal(val, head.right);
    return head;
  };
  for (let i = 1; i < preorder.length; i++) {
    head = putVal(preorder[i], head);
  }
  return head;
};
