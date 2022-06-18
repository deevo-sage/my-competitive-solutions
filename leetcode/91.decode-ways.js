/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let count = 0;
  const map = new Set();
  const dp = new Array(s.length).fill(-1);
  for (let i = 1; i < 27; i++) {
    map.add("" + i);
  }
  const parseChar = (i) => {
    if (s[i] === "0") return 0;
    if (i === s.length) {
      count++;
      return 1;
    }
    if (dp[i] !== -1) {
      count += dp[i];
      return dp[i];
    }
    let c = 0;
    const x = parseChar(i + 1);
    c += x;
    if (i < s.length - 1) {
      if (map.has(s.substring(i, i + 2))) {
        if (i + 2 === s.length) {
          count++;
          c++;
        } else {
          const x = parseChar(i + 2);
          c += x;
        }
      }
    }
    dp[i] = c;
    return c;
  };
  parseChar(0);
  return count;
};
// @lc code=end
