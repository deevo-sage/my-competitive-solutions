/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let dp = {};
  let max = 0,
    curr = 0,
    maxIdx = 0;
  for (let i = 0; i < s.length; i++) {
    if (dp[s.charAt(i)] !== undefined) {
      maxIdx = Math.max(dp[s.charAt(i)], maxIdx);
      curr = i - maxIdx;
      max = Math.max(max, curr);
    } else {
      curr++;
      max = Math.max(max, curr);
    }
    dp[s.charAt(i)] = i;
  }
  max = Math.max(max, curr);
  return max;
};
console.log(
  lengthOfLongestSubstring("auogbrou1aopisbdfoajsdoafwopih120baosjdfbasodas")
);

//abwved dvdfghtk -> {d:2,v:1}
// max =7
// Curr = 7
// maxIdx = 1
