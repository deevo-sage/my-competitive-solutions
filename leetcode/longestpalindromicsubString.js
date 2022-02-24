/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let dp = new Array(s.length).fill(0);
  dp = dp.map((item) => {
    const x = new Array(s.length).fill(false);
    return x;
  });
  let tuple = [0, 0];
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      tuple = [i, i + 1];
      dp[i][i + 1] = true;
    }
  }
  for (let i = 1; i < s.length; i++) {
    for (let j = 0; j < s.length - i; j++) {
      if (s[j] === s[j + i]) {
        if (dp[j + 1][j + i - 1]) {
          tuple = [j, j + i];
          dp[j][j + i] = true;
        }
      }
    }
  }
  // console.log(dp);
  // console.log({ tuple, sub: s.substring(tuple[0], tuple[1] + 1) });
  return s.substring(tuple[0], tuple[1] + 1);
};
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("bababa"));
console.log(longestPalindrome("cbba"));
