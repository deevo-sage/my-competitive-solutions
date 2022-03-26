/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head == null || head.next === null) return false;
  let s = head;
  let f = head.next;
  while (f.next !== null && f.next.next !== null) {
    s = s.next;
    f = f.next.next;
    if (s === f) {
      return true;
    }
  }
  return false;
};
// @lc code=end
