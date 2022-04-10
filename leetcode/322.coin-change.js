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
const rec = (idx, coins, amt) => {
  if (idx == 0) {
    if (amt % coins[0] == 0) return amt / coins[0];
    return 1e9;
  }
  if (hasMap[idx][amt] != -1) {
    return hasMap[idx][amt];
  }
  const notTake = rec(idx - 1, coins, amt);
  let take = 1e9;
  if (coins[idx] <= amt) take = 1 + rec(idx, coins, amt - coins[idx]);
  hasMap[idx][amt] = Math.min(take, notTake);
  return hasMap[idx][amt];
};
// /**
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}
//  */
var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  hasMap = Array(coins.length)
    .fill(0)
    .reduce((prev, val) => {
      prev.push(new Array(amount + 1).fill(-1));
      return prev;
    }, []);

  const ans = rec(coins.length - 1, coins, amount);
  console.log({ ans });
  return ans === 1e9 ? -1 : ans;
};

console.log(coinChange([186, 419, 83, 408], 6249));
// @lc code=end
