/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    const idx = t.indexOf(s[i]);
    if (idx >= 0) {
      t = t.substring(0, idx) + t.substring(idx + 1, t.length);
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const output = [];

  for (let i = 0; i < strs.length; i++) {
    if (strs[i] !== 0) {
      const arr = [strs[i]];
      for (let j = i + 1; j < strs.length; j++) {
        if (isAnagram(strs[i], strs[j])) {
          arr.push(strs[j]);
          strs[j] = 0;
        }
      }
      if (arr.length > 0) {
        output.push(arr);
      }
    }
  }
  return output;
};
console.log(groupAnagrams([""]));
// @lc code=end
