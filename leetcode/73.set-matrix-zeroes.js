/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const temp = [];
  const col = new Set();
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        col.add(j);
        row = new Array(matrix[i].length).fill(0);
        break;
      }
    }
    temp.push(row);
  }
  col.forEach((item) => {
    for (let i = 0; i < matrix.length; i++) {
      temp[i][item] = 0;
    }
  });
  return temp;
};
console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
// @lc code=end
