/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (target == nums[mid]) {
      return mid;
    }
    // if mid is smaller than it is in the small sorted side
    if (nums[mid] < nums[left]) {
      // target greater than mid but small than right then it lies between them
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      }
      // smaller than mid then on the other side
      else {
        right = mid - 1;
      }
    }
    // mid greater than left so in large sorted side
    else {
      // target smaller than mid and greater than left than between them
      if (target <= nums[mid] && target >= nums[left]) {
        right = mid - 1;
      }
      // else on the other side
      else {
        left = mid + 1;
      }
    }
  }
  // didn't find target in nums
  return -1;
};
console.log(search([1, 2, 3, 4, 5, 6], 4));
// @lc code=end
