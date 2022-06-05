/*
 * @lc app=leetcode id=354 lang=javascript
 *
 * [354] Russian Doll Envelopes
 */

// @lc code=start
/**
 * @param {number[][]} e
 * @return {number}
 */
var maxEnvelopes = function (e) {
  let max = 0;
  const dp = [];
  for (let i = 0; i < e.length; i++) dp.push(new Array(2).fill(-1));

  const findNext = (curr, count) => {
    if (curr > e.length || curr < 0) return;
    max = Math.max(count, max);
    let min = [curr, curr];
    if (dp[curr][0] !== -1 || dp[curr][1] !== -1) {
      // console.log(dp);
      findNext(dp[curr][0], count + 1);
      findNext(dp[curr][1], count + 1);
    } else {
      for (let i = 0; i < e.length; i++) {
        if (e[curr][0] < e[i][0] && e[curr][1] < e[i][1]) {
          // console.log({ min, a: e[min[0]] });
          if (e[min[0]][0] > e[i][0] || min[0] == curr) {
            min[0] = i;
          }
          if (e[min[1]][1] > e[i][1] || min[1] == curr) {
            min[1] = i;
          }
          // console.log(1, curr, e[i], e[curr], e[min[0]], e[min[1]], min);
        }
      }
      if (min[0] !== curr || min[1] != curr) {
        if (min[0] !== curr) {
          dp[curr][0] = min[0];
        }
        if (min[1] != curr) {
          dp[curr][1] = min[1];
        }
        findNext(min[0], count + 1);
        findNext(min[1], count + 1);
      }
    }
  };
  for (let i = 0; i < e.length; i++) {
    findNext(i, 1);
  }
  console.log({ ...dp });
  return max;
};
console.log(
  maxEnvelopes([
    [15, 8],
    [2, 20],
    [2, 14],
    [4, 17],
    [8, 19],
    [8, 9],
    [5, 7],
    [11, 19],
    [8, 11],
    [13, 11],
    [2, 13],
    [11, 19],
    [8, 11],
    [13, 11],
    [2, 13],
    [11, 19],
    [16, 1],
    [18, 13],
    [14, 17],
    [18, 19],
  ])
);
// @lc code=end
