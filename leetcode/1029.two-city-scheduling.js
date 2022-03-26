/*
 * @lc app=leetcode id=1029 lang=javascript
 *
 * [1029] Two City Scheduling
 */

// @lc code=start
/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  const len = costs.length;
  let arr = costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
  arr.reduce(
    (prev, curr, i) => (i < len / 2 ? prev + curr[0] : prev + curr[1]),
    0
  );
};
// @lc code=end
