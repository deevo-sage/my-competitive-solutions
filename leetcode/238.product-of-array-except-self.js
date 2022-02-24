/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const answer = new Array(nums.length);
  for (let i = 0, temp = 1; i < nums.length; i++) {
    answer[i] = temp;
    temp *= nums[i];
  }
  for (let i = nums.length - 1, temp = 1; i >= 0; i--) {
    answer[i] *= temp;
    temp *= nums[i];
  }
  return answer;
};
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// @lc code=end
