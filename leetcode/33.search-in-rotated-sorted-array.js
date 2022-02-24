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
  let min = 0,
    max = nums.length - 1;
  if (nums[0] === target) {
    return 0;
  } else if (nums[max] === target) {
    return max;
  }
  let prevmid = -1;
  while (min < max) {
    let mid = (min + max) / 2;
    if (prevmid === mid) {
      break;
    }

    prevmid = mid;
    mid = Math.floor(mid);
    console.log({ mid, min, max, val: nums[mid] });
    if (target <= nums[mid]) {
      if (target >= nums[min]) {
        max = mid;
      } else {
        min = mid;
      }
    } else if (target >= nums[mid]) {
      console.log("x");
      if (nums[max] >= target) {
        max = mid;
      } else if (target >= nums[max] && target >= nums[min]) {
        max -= 1;
        if (nums[max] === target) {
          return max;
        }
      } else {
        min = mid;
      }
    }
    if (nums[mid] === target) {
      return mid;
    }
    console.log({ min, max });
  }
  return -1;
};
console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8));
// @lc code=end

//          -     |  +
// 4  5  6  7  8  1  2
