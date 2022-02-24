/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = nums[0];
  let max_so_far = nums[0];
  let min_so_far = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let maxMul = max_so_far * nums[i],
      minMul = min_so_far * nums[i];

    max_so_far = Math.max(maxMul, nums[i], minMul);
    min_so_far = Math.min(maxMul, nums[i], minMul);

    max = Math.max(max, max_so_far);
  }
  return max;
};
// @lc code=end
//
