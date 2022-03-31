/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let i, j, k, l;
  for (let z = 0; z < matrix.length / 2; z++) {
    i = 0 + z;
    j = matrix.length - 1 - z;
    let l = matrix.length - 1 - z,
      k = 0 + z;
    console.log(z);
    while (i < matrix.length - 1 - z) {
      let t1 = matrix[k][i];
      let t2 = matrix[j][k];
      let t3 = matrix[l][j];
      let t4 = matrix[i][l];
      matrix[k][i] = t2;
      matrix[j][k] = t3;
      matrix[l][j] = t4;
      matrix[i][l] = t1;

      //   matrix[k][i] = matrix[j][k];
      //   matrix[j][k] = temp;

      console.log({ matrix, t1, t2, t3, t4 });
      i++;
      j--;
    }
  }
};
rotate([
  [5, 1, 9, 11, 20],
  [2, 4, 8, 10, 21],
  [13, 3, 6, 7, 22],
  [15, 14, 12, 16, 23],
  [27, 26, 25, 24, 23],
]);
// @lc code=end
