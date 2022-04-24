/*
 * @lc app=leetcode id=1260 lang=javascript
 *
 * [1260] Shift 2D Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const g = Array(grid.length)
    .fill(0)
    .map((item) => new Array(grid[0].length));
  for (let i in grid) {
    for (let j in grid[i]) {
      const x = (i + (j + k) / grid[0].length) % grid.length;
      const y = j + k;
    }
  }
};
// @lc code=end
