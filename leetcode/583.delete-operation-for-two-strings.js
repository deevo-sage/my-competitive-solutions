/*
 * @lc app=leetcode id=583 lang=javascript
 *
 * [583] Delete Operation for Two Strings
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  // take out lcs of word1 and word2

  let lcs = function (word1, word2) {
    let dp = new Array(word1.length + 1)
      .fill(0)
      .map(() => new Array(word2.length + 1).fill(0));
    for (let i = 1; i <= word1.length; i++) {
      for (let j = 1; j <= word2.length; j++) {
        if (word1[i - 1] === word2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
    
    return dp[word1.length][word2.length];
  };
  let lcs1 = lcs(word1, word2);
  return word1.length + word2.length - 2 * lcs1;
};
// @lc code=end
