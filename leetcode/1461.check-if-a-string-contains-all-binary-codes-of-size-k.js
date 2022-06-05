/*
 * @lc app=leetcode id=1461 lang=javascript
 *
 * [1461] Check If a String Contains All Binary Codes of Size K
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
  if (s.length < k ** 2) return false;
  //   const se = genSet(k);
  const se = new Set();
  for (let i = 0; i <= s.length - k; i++) {
    const ss = s.substring(i, i + k);
    se.add(ss);
    // if (se.has(ss)) {
    //   se.delete(ss);
    // }
  }
  // console.log(se.keys())
  return se.size >= k*k? true : false;
};
/**
 * @param {Set<string>} s
 * @param {number} k
 * @return {void}
 */

function genSet(k) {
  let s = ["0", "1"];

  for (let i = 1; i < k; i++) {
    const arr = [];
    s.forEach((item) => {
      arr.push(item + "0");
      arr.push(item + "1");
    });
    s = arr;
  }
  console.log(s);
  return new Set(s);
}
// @lc code=end
console.log(hasAllCodes("00110110", 20));
