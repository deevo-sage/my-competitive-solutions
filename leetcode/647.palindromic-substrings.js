/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const dp = [];
  for (let i = 0; i < s.length; i++) {
    dp.push(new Array(s.length).fill(0));
  }
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1;
  }
  let count = s.length;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = 1;
      count++;
    }
  }
  for (let i = s.length - 2; i >= 0; i--) {
    for (let j = s.length - 1; j > i + 1; j--) {
      if (s[i] === s[j] && dp[i - 1][j - 1] === 1) {
        dp[i][j] = 1;
    count++;
      }
    }
  }
  return count;
};
// @lc code=end

//   a  b  a  c
// a 1  0  1
// b .  1  0  0
// a .  .  1  0
// c .  .  .  1
