/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (word.length > board.length * board[0].length) return false;
  const runAlgo = (i, j, l, dp) => {
    let temp = false;
    const checkRun = (a, b) => {
      if (dp[a + "" + b]) return;
      if (board[a]) {
        if (board[a][b] === word[l]) {
          console.log({ a: word[l], b: a + "" + b, dp });
          if (l < word.length - 1) {
            let z = new Object(dp);
            z[a + "" + b] = true;
            const x = runAlgo(a, b, l + 1, z);
            z[a + "" + b] = false;
            temp = temp || x;
          } else if (l === word.length - 1) temp = temp || true;
        }
      }
    };
    checkRun(i + 1, j);
    checkRun(i, j + 1);
    checkRun(i - 1, j);
    checkRun(i, j - 1);
    return temp;
  };
  let x = false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        const dp = {};
        dp[i + "" + j] = true;
        if (word.length !== 1) x = x || runAlgo(i, j, 1, dp);
        else return true;
      }
    }
  }
  return x;
};
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "E", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCESEEEFS"
  )
);
// [
//   ["A", "B", "C", "E"],
//   ["S", "F", "E", "S"],
//   ["A", "D", "E", "E"],
// ];
// ("ABCESEEEFS");
// [["a"]];
// @lc code=end
