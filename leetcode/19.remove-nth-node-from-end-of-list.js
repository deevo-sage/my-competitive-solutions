/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head.next && n == 1) return head.next;
  let temp1 = head,
    temp2 = head;
  let diff = 0;
  while (temp1.next) {
    temp1 = temp1.next;
    if (diff >= n) {
      temp2 = temp2.next;
    }
    diff++;
  }
  if (diff >= n) {
    temp2.next = temp2.next.next;
  }
  if (diff == n - 1) {
    head = head.next;
  }
  return head;
}; // @lc code=end
