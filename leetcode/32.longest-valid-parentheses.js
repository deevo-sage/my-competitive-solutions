/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var longestValidParentheses = function (s) {
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let stack = 0;
    let count = 0;
    for (let j = i; j < s.length; j++) {
      if (s[j] === "(") stack++;
      else {
        if (stack > 0) {
          count += 2;
          stack--;
        } else {
          break;
        }
        if (stack == 0) max = Math.max(count, max);
      }
    }
  }
  return max;
};

// @lc code=end
