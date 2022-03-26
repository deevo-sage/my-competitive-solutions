/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  // const map = {};
  // for (let char of s) {
  //   if (typeof map[char] !== "number") {
  //     map[char] = 0;
  //   }
  //   map[char]++;
  // }
  // for (let char of t) {
  //   map[char]--;
  // }
  // const arr = Object.values(map);
  // for (let val of arr) {
  //   if (val !== 0) return false;
  // }
  const map = new Array(26).fill(0);
  const charCode = "a".charCodeAt(0);
  for (let i in s) {
    map[s.charCodeAt(i) - charCode]++;
  }
  for (let i in t) {
    map[t.charCodeAt(i) - charCode]--;
  }
  for (let val of map) {
    if (val !== 0) return false;
  }
  return true;
};
console.log(isAnagram("aacc", "ccaca"));
// @lc code=end
