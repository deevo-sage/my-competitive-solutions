/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let json = {};
  const rec = (root, obj) => {
    if (!root) return;
    obj.val = root.val;
    obj.left = {};
    obj.right = {};
    obj.left = rec(root.left, obj.left);
    obj.right = rec(root.right, obj.right);

    return obj;
  };
  json = rec(root, json);
  return JSON.stringify(json);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  console.log({ data });
  let json = JSON.parse(data);
  console.log({ json });
  const rec = (obj) => {
    if (!obj) return null;
    const node = new TreeNode(obj.val);
    node.left = rec(obj.left);
    node.right = rec(obj.right);
    return node;
  };
  const root = rec(json);
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
