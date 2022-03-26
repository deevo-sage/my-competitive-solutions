/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return root;
  const inOrder = (head) => {
    if (!head) return;
    if (
      (p.val < head.val && q.val > head.val) ||
      (q.val < head.val && p.val > head.val)
    ) {
      return head;
    } else if (p.val == head.val || q.val == head.val) {
      return head;
    } else if (p.val < head.val && q.val < head.val) {
      return inOrder(head.left);
    } else {
      return inOrder(head.right);
    }
  };
  return inOrder(root);
};
