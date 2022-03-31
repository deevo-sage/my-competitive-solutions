/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 */
const blog = (bin) => console.log(bin.toString(2));
// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  let ans;
  while (b != 0) {
    carry = a & b;
    ans = a ^ b;
    blog(carry);
    blog(ans);
    b = carry << b;
    blog(carry);
    blog(ans >>> 0);
  }
  return ans;
};
getSum(9, 1);
// @lc code=end
