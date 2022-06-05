/*
 * @lc app=leetcode id=417 lang=javascript
 *
 * [417] Pacific Atlantic Water Flow
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const m = heights.length,
    n = heights[0].length;
  const dp = [];
  for (let i = 0; i < m; i++) {
    dp.push(new Array(n).fill(0));
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = [0, 0];
    }
  }
  // console.log(dp);
  const arrToDp = (i, j, arr) => {
    dp[i][j] = [Math.max(dp[i][j][0], arr[0]), Math.max(dp[i][j][1], arr[1])];
  };
  const rec = (i, j) => {
   
    if (i >= m || j >= n) return [0, 0];
    if (i === 0 || j === 0) dp[i][j][0] = 1;
    if (i === m - 1 || j === n - 1) dp[i][j][1] = 1;

    if (dp[i][j][0] === 1 && dp[i][j][1] === 1) return dp[i][j];

    if (i < m - 1 && heights[i + 1][j] < heights[i][j]) {
      arrToDp(i, j, rec(i + 1, j));
    }
    if (i > 0 && heights[i - 1][j] < heights[i][j]) {
      arrToDp(i, j, rec(i - 1, j));
    }
    if (j > 0 && heights[i][j - 1] < heights[i][j]) {
      arrToDp(i, j, rec(i, j - 1));
    }
    if (j < n - 1 && heights[i][j + 1] < heights[i][j]) {
      arrToDp(i, j, rec(i, j + 1));
    }
    return dp[i][j];
  };
  const arr = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const ar = rec(i, j);
      if (ar[0] === 1 && ar[1] === 1) {
        arr.push([i, j]);
      }
    }
  }
  return arr;
};
pacificAtlantic([
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
]);
// @lc code=end
