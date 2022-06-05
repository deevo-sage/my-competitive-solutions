/*
 * @lc app=leetcode id=474 lang=javascript
 *
 * [474] Ones and Zeroes
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (wordsList, M, N) {
  let dp = Array(M + 1)
    .fill(0)
    .map(() => Array(N + 1).fill(0)); // init the dp array which is basically M * N Grid for 0 and 1 combination
  for (let word of wordsList) {
    let wordZeroCounter = 0,
      wordOneCounter = 0;
    // init the 0 and 1 counter for the current iteration word
    for (let c of word) {
      if (c == "0") wordZeroCounter++;
      else wordOneCounter++;
    }
    for (let x = M; x >= wordZeroCounter; x--) {
      for (let y = N; y >= wordOneCounter; y--) {
        dp[x][y] = Math.max(
          dp[x][y],
          dp[x - wordZeroCounter][y - wordOneCounter] + 1
        );
      }
    }
  }
  // console.log(dp)
  return dp[M][N];
};
// var findMaxForm = function (strs, m, n) {
//   const tuples = [];
//   for (let i = 0; i < strs.length; i++) {
//     const arr = [0, 0];
//     for (let j = 0; j < strs[i].length; j++) {
//       if (strs[i][j] === "1") {
//         arr[1]++;
//       } else {
//         arr[0]++;
//       }
//     }
//     tuples.push(arr);
//   }
//   let max = 0;
//   const rec = (i, tuple, len) => {
//       if(tuple[0] > m || tuple[1] > n) return;
//     max = Math.max(max, len);
//       if(i>=tuples.length )return;
//     rec(i+1, [tuple[0] + tuples[i][0], tuple[1] + tuples[i][1]], len + 1);
//     rec(i + 1, tuple, len);
//   };

//   rec(0, [0, 0], 0);
//   return max;
// };
// // @lc code=end
