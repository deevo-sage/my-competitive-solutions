/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) return "";
  const map = new Map();
  const map2 = new Map();
  for (let char of t) {
    if (!map2.has(char)) {
      map2.set(char, 1);
    } else {
      map2.set(char, map2.get(char) + 1);
    }
  }
  let valid = 0;
  let start = 0;
  let l = 0,
    r = 0;
  let length = Infinity;
  while (r < s.length) {
    const char = s[r];
    r++;
    if (map2.has(char)) {
      map.set(char, (map.get(char) || 0) + 1);
    }
    if (map.has(char) && map2.has(char) && map.get(char) === map2.get(char)) {
      valid++;
    }
    while (valid === map2.size) {
      if (r - l < length) {
        start = l;
        length = r - l;
      }
      const char = s[l];
      l++;
      if (map.has(char) && map2.has(char) && map.get(char) === map2.get(char)) {
        valid--;
      }
      if (map2.has(char)) {
        map.get(char) > 0 ? map.set(char, map.get(char) - 1) : map.delete(char);
      }
    }
  }
  return length === Infinity ? "" : s.substring(start, start + length);
};
// @lc code=end
