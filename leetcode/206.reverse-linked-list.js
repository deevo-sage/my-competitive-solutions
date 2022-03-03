/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
//   Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  const stack = [];
  if (head) {
    while (head.next) {
      stack.push(head.val);
      head = head.next;
    }
    stack.push(head.val);
    return stack.reduce((prev, curr) => {
      if (!prev) {
        return new ListNode(curr);
      }
      return new ListNode(curr, prev);
    }, null);
  } else {
    return head;
  }
};
// @lc code=end
