/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (arr, k) {
  let sums = {};
  for (let i of arr) {
    if (sums[i - 1]) sums[i - 1][1]++;
    else sums[i - 1] = [i, 1];
  }
  sums = Object.values(sums);
  sums.sort((a, b) => a[1] - b[1]);
  const y = [];
  for (let i = sums.length - k; i < sums.length; i++) {
    y.push(sums[i][0]);
  }
  return y;
};
// @lc code=end
