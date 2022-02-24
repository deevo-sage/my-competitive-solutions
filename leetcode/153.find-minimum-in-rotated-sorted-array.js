/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let min = 0,
    max = nums.length - 1;
  let minima = Math.min(nums[min], nums[max]);
  //   return Math.min(...nums);
  let prevmid = 0;
  while (min < max) {
    let mid = Math.floor((min + max) / 2);
    if (prevmid === mid) {
      break;
    }
    prevmid = mid;
    minima = Math.min(nums[min], nums[mid], nums[max]);
    console.log({ nums, max, min, minima });
    if (nums[mid] >= nums[max]) {
      min = mid;
    } else if (nums[mid] <= nums[min]) {
      max = mid;
    }
  }
  return minima;
};
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
// console.log(findMin([11, 13, 15, 17]));
// @lc code=end

//          -        +      
// 4  5  6  7  0  1  2
