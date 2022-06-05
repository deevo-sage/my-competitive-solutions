/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const dp = [];
  for (let i = 0; i < candidates.length; i++) {
    dp.push(new Array(target).fill(0));
  }
  const output = [];
  const rec = (i, t, arr) => {
    if (t === 0) {
      output.push(arr);
      return;
    }
    if (t < 0 || i >= candidates.length) return;
    if (dp[i][t] === 1) {
      return;
    }
    dp[i][t] = 1;
    rec(i + 1, t, arr);
    const temp = [...arr];
    temp.push(candidates[i]);

    rec(i + 1, t - candidates[i], temp);
  };
  rec(0, target, []);
  return output;
};
// @lc code=end
