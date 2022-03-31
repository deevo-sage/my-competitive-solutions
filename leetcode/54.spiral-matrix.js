/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
 var spiralOrder = function (matrix) {
   let top = 0,
     right = matrix[0].length - 1,
     bottom = matrix.length - 1,
     left = 0;
   const arrResult = [];
   while (top <= bottom && left <= right) {
     // Top (Move Forward)
     for (let i = left; i <= right; i++) {
       arrResult.push(matrix[top][i]);
     }
     top++;

     // Right (Move up side down)
     for (let j = top; j <= bottom; j++) {
       arrResult.push(matrix[j][right]);
     }
     right--;

     // Bottom (Move backward)
     if (top <= bottom) {
       for (let k = right; k >= left; k--) {
         arrResult.push(matrix[bottom][k]);
       }
       bottom--;
     }

     // Left (Move bottom to up)
     if (left <= right) {
       for (let l = bottom; l >= top; l--) {
         arrResult.push(matrix[l][left]);
       }
       left++;
     }
   }
   return arrResult;
 };
};
console.log(
  spiralOrder([
    [2, 5],
    [8, 4],
    [0, -1],
  ])
);
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
// @lc code=end
