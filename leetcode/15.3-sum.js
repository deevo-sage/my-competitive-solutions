/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let hasZero = false;
  nums.sort((a, b) => {
    return a - b;
  });
  let output = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i - 1] !== nums[i])) {
      const target = 0 - nums[i];
      let low = i + 1,
        high = nums.length - 1;
      while (low < high) {
        if (nums[low] + nums[high] === target) {
          output.push([nums[i], nums[low], nums[high]]);
          while (nums[low] === nums[low + 1] && low < high) low++;
          while (nums[high] === nums[high + 1] && low < high) high--;
          low++;
          high--;
        } else if (nums[low] + nums[high] > target) {
          high--;
        } else {
          low++;
        }
      }
    }
  }
  return output;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// @lc code=end
//
// [-4, -1, -1, 0, 1, 2];
