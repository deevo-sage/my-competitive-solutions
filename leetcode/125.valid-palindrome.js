/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

const symbolList = [",", " ", ":", "'", ";", '"', "."];
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s.trim();
  s = s
    .split(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/@]/)
    .join("")
    .split(" ")
    .join("")
    .toLowerCase();

  const rec = (s) => {
    if (s.length === 1 || s.length === 0) return true;
    if (s[0] === s[s.length - 1]) return rec(s.slice(1, s.length - 1));
    return false;
  };

  return rec(s);
};
console.log(isPalindrome("ab@a"));
// @lc code=end
