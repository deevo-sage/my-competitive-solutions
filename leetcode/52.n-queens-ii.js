/*
 * @lc app=leetcode id=52 lang=javascript
 *
 * [52] N-Queens II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let result = 0;
  const board = [];
  //   for (let i = 0; i < n; i++) board.push(new Array(m).fill("."));
  const posD = new Set();
  const negD = new Set();
  const col = new Set();
  const backTrack = (r) => {
    if (r === n) return result++;
    for (let c = 0; c < n; c++) {
      if (col.has(c) || posD.has(r + c) || negD.has(r - c)) {
      } else {
        posD.add(c + r);
        negD.add(r - c);
        col.add(c);
        backTrack(r + 1);
        posD.delete(c + r);
        negD.delete(r - c);
        col.delete(c);
      }
    }
  };
  backTrack(r);
  return result;
};
// @lc code=end
