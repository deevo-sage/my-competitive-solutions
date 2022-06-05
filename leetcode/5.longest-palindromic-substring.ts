/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s: string): string {
  const dp = [];
  let largeTuple = [0, 0];
  for (let i = 0; i < s.length; i++) {
    dp.push(new Array(s.length).fill(0));
  }
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1;
  }
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      largeTuple = [i, i + 1];
      dp[i][i + 1] = 1;
    }
  }
  for (let i = s.length - 2; i >= 0; i--) {
    for (let j = s.length - 1; j > i + 1; j--) {
      if (s[i] === s[j] && dp[i + 1][j - 1] === 1) {
        dp[i][j] = 1;
        if (largeTuple[1] - largeTuple[0] < j - i) largeTuple = [i, j];
      }
    }
  }

  return s.substring(largeTuple[0], largeTuple[1] + 1);
}

//   b a b a d
// b 1 0 1 0 0
// a . 1 0 1 0
// b . . 1 0 0
// a . . . 1 0
// d . . . . 1
//

// @lc code=end
