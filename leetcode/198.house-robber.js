/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const dp = [nums[0], Math.max(nums[0], nums[1])];

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }

  return dp[nums.length - 1];
};
console.log(rob([2, 2, 4, 3, 2, 5]));
// @lc code=end
//[ 2  7  11 11 12   ]
//[ 2  7  9  3  1]
//[ 2 2 3 9    ]
//[ 2,1,1,7 ]
