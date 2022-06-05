/*
 * @lc app=leetcode id=284 lang=javascript
 *
 * [284] Peeking Iterator
 */

// @lc code=start
/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator<number,number,number>} iterator
 */
var PeekingIterator = function (iterator) {
  this.iterator = iterator;
  this.arr = [];
  this.idx = 0;
  let x = 0;
  while (typeof x === "number") {
    x = iterator.next();
    this.arr.push(x);
  }
  console.log(this.arr);
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  return this.iterator[idx];
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  this.idx++;
  return this.iterator[idx];
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
  return typeof this.iterator[idx + 1] === "number";
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
// @lc code=end
