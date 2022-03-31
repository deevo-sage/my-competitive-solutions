/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const dp = new Array(numRows).fill("");
  let idx = 0;
  while (idx < s.length) {
    for (let i = 0; i < numRows; i++) {
      if (idx >= s.length) break;
      dp[i] += s[idx];
      idx++;
    }

    for (let i = numRows - 2; i > 0; i--) {
      if (idx >= s.length) break;
      dp[i] += s[idx];
      idx++;
    }
  }
  return dp.join("");
};

// @lc code=end
