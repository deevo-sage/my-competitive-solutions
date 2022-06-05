/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const mySet = new Set(nums);
  let max = 0;
  const hasNext = (val, len) => {
    console.log(val, len);
    if (mySet.has(val + 1)) {
      hasNext(val + 1, len + 1);
    } else Math.max(len, max);
  };
  for (let i = 0; i < nums.length; i++) {
    console.log(mySet.has(nums[i] - 1), nums[i]);
    if (!mySet.has(nums[i] - 1)) {
      hasNext(nums[i], 1);
    }
  }
  return max;
};
// @lc code=end
