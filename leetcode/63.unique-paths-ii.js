/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

var uniquePathsWithObstacles = function (grid) {
  if (grid[0][0] === 1) return 0;
  if (grid.length == 1 && grid[0].length == 1) return grid[0][0] == 1 ? 0 : 1;
  let count = 0;
  const dp = [];
  for (let i = 0; i < grid.length; i++) {
    dp.push(new Array(grid[0].length).fill(0));
  }
  console.log(dp);
  const rec = (i, j) => {
    let c = 0;
    if (i == grid.length - 1 && j == grid[0].length - 1) {
      count++;
      return 1;
    }

    if (i != grid.length - 1 && grid[i + 1][j] != 1) {
      c += rec(i + 1, j);
    }
    if (j != grid[0].length - 1 && grid[i][j + 1] != 1) {
      c += rec(i, j + 1);
    }
    return c;
  };
  rec(0, 0);
  return count;
};
// @lc code=end
