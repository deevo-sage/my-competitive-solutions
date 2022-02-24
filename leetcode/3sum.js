/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let sorted = nums.sort((a, b) => a - b);
  console.log(sorted);
  let i = 0,
  const final = new Set();
  if (nums.length < 3) return [...final];
  while (nums[i]<1) {
      
  }
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
