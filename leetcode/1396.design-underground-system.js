/*
 * @lc app=leetcode id=1396 lang=javascript
 *
 * [1396] Design Underground System
 */

// @lc code=start

var UndergroundSystem = function () {
  this.cus = {};
  this.trips = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.cus[id] = [stationName, t];
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  if (!this.trips[this.cus[id][0] + "-" + stationName])
    this.trips[this.cus[id][0] + "-" + stationName] = [t - this.cus[id][1]];
  else
    this.trips[this.cus[id][0] + "-" + stationName].push(t - this.cus[id][1]);
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  return (
    this.trips[startStation + "-" + endStation].reduce(
      (prev, item) => prev + item,
      0
    ) / this.trips[startStation + "-" + endStation].length
  );
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
// @lc code=end
