/*

 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let arr = [0, 0, 0];
  const x = nums.length;
  for (let c = 0; c < x; c++) {
    arr[nums[c]]++;
  }
  const [i, j, k] = arr;
  for (let c = 0; c < x; c++) {
    let z = 0;
    if (c >= i) {
      z = 1;
      if (c >= i + j) {
        z = 2;
      }
    }
    nums[c] = z;
  }
};
const x = [2, 0, 2, 1, 1, 0];
console.log(sortColors(x));
console.log(x);
function reverseString(str) {
  return str.split("").reverse().join("");
}
// @lc code=end
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const len = Math.min(num1.length, num2.length);
  const maxLen = Math.max(num1.length, num2.length);
  let val = "";
  let c = 0;
  for (let i = 0; i < len; i++) {
    let x = parseInt(num1[i]) + parseInt(num2[i]) + c;
    if (x >= 10) {
      val += x % 10;
      c = 1;
    } else {
      val += x;
      c = 0;
    }
  }
  const big = num1.length >= num2.length ? num1 : num2;
  for (let i = len; i < maxLen; i++) {
    val += parseInt(big[i]) + c;
    if (c == 1) {
      c = 0;
    }
  }
  return val.reverse();
};
