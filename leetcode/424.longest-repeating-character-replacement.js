/*
 * @lc app=leetcode id=424 lang=javascript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let top = 0,
    bottom = 0;
  let t = 0;
  let curr = 0;
  let max = 0;
  const setStuff = (i) => {
    bottom = i;
    top = i - 1;
    t = 0;
    curr = 0;
  };
  while (bottom < s.length) {
    if (top == s.length) {
      setStuff(bottom + 1);
    }

    if (s[bottom] !== s[top]) {
      console.log({ top, bottom, t, curr });
      if (t < k) {
        t++;
        if (t === k) {
          setStuff(bottom + 1);
        } else {
          curr++;
          max = Math.max(curr, max);
        }
      }
    } else {
      curr++;
    }
    top++;
  }
  return max;
};
// @lc code=end
