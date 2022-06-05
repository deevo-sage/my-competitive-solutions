/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const visited = new Set();
  const jumpNext = (idx) => {
    if (idx === nums.length - 1) return true;
    if (nums[idx] === 0 || idx >= nums.length) {
      return false;
    }
    if (visited.has(idx)) return false;
    for (let i = nums[idx]; i > 0; i--) {
      const x = jumpNext(idx + i);
      visited.add(idx + i);
      if (x) return x;
    }
    return false;
  };
  return jumpNext(0);
};
// @lc code=end
