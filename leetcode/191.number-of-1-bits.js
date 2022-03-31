/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  while (n != 0) {
    let carry = n & 1;
    if (carry === 1) count++;
    n = n >>> 1;
  }
  console.log(count);
  return count;
};
hammingWeight(11)
// @lc code=end
