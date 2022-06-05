/*
 * @lc app=leetcode id=1584 lang=javascript
 *
 * [1584] Min Cost to Connect All Points
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const x = new Array(points.length).fill(1e6);
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const y =
        Math.abs(points[i][0] - points[j][0]) +
        Math.abs(points[i][1] - points[j][1]);

      x[j] = Math.min(x[j], y);
      x[i] = Math.min(x[i], y);
    }
  }

  //   console.log(dp,x);
  //   console.log(x.reduce((prev, curr) => prev + curr, 0));
  return x.reduce((prev, curr) => (curr === 1e6 ? prev : prev + curr), 0);
};
// @lc code=end
[
  [0, 4, 13, 7, 7],
  [0, 0, 9, 3, 7],
  [0, 0, 0, 10, 14],
  [0, 0, 0, 0, 4],
  [0, 0, 0, 0, 0],
];
