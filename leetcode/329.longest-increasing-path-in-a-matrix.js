/*
 * @lc app=leetcode id=329 lang=javascript
 *
 * [329] Longest Increasing Path in a Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  // making dp matrix
  const dp = new Array(matrix.length);
  for (let i = 0; i < matrix.length; i++) {
    dp[i] = new Array(matrix[0].length).fill(-1);
  }
  let max = 0;
  const findMax = (i, j) => {
    let mx = 0;
    if (dp[i][j] != -1) {
      return dp[i][j];
    }
    if (matrix[i][j + 1] && matrix[i][j + 1] > matrix[i][j]) {
      mx = Math.max(mx, findMax(i, j + 1));
    }
    if (matrix[i][j - 1] && matrix[i][j - 1] > matrix[i][j]) {
      mx = Math.max(mx, findMax(i, j - 1));
    }
    if (matrix[i + 1] && matrix[i + 1][j] > matrix[i][j]) {
      mx = Math.max(mx, findMax(i + 1, j));
    }
    if (matrix[i - 1] && matrix[i - 1][j] > matrix[i][j]) {
      mx = Math.max(mx, findMax(i - 1, j));
    }
    dp[i][j] = mx + 1;
    return mx + 1;
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      findMax(i, j);
      max = Math.max(max, dp[i][j]);
    }
  }
  return max;
};
// @lc code=end
