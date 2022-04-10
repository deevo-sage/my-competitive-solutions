/*
 * @lc app=leetcode id=682 lang=javascript
 *
 * [682] Baseball Game
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (arr) {
  let a = [];
  for (let i in arr) {
    if (parseInt(arr[i])) a.push(parseInt(arr[i]));
    else if (arr[i] == "D") {
      a.push(a[a.length - 1] * 2);
    } else if (arr[i] == "C") {
      a.pop();
    } else if (arr[i] == "+") {
      a.push(a[a.length - 1] + a[a.length - 2]);
    }
  }
  return a.reduce((prev, curr) => curr + prev, 0);
};
// @lc code=end

