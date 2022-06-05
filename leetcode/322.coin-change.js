// /*
//  * @lc app=leetcode id=322 lang=javascript
//  *
//  * [322] Coin Change
//  */

// // @lc code=start
// let hasMap;

// /**
//  * @param {number} idx
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}
//  */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = [];
  for (let i = 0; i < coins; i++) {
    dp.push(new Map());
  }

  const rec = (idx, amt) => {
    if (idx == 0) {
      if (amt % coins[0] == 0) return amt / coins[0];
      return 1e9;
    }
    if (dp[idx].has(amt)) {
      return dp[idx].get(amt)
    }
  };
};

console.log(coinChange([186, 419, 83, 408], 6249));
// @lc code=end
