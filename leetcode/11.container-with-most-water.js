/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let l = 0,
    h = height.length - 1;

  while (l < h) {
    const he = Math.min(height[l], height[h]);
    max = Math.max(max, he * (h - l));
    if (height[l] <= height[h]) {
      l++;
    } else {
      h--;
    }
  }
  return max;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// @lc code=end
