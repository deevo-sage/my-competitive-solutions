"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

var inputString = "";
var currentLine = 0;

const prompt = require("prompt-sync")();
var intersections = [],
  carsgoing = {};
var streets = {},
  cars = [];
var totaltime, intersectionAmount, streetsamount, carsamount, pointspercar;

main();
// 3
// 1
// 2
// rue-d-athenes 2
// rue-d-amsterdam 1
// 0
// 1
// rue-de-londres 2
// 2
// 1
// rue-de-moscou 1
function abc() {
  for (let i = 0; i < intersectionAmount; i++) {
    intersections.push({ start: [], end: [] });
  }
  for (var key in streets) {
    intersections[Number(streets[key].start)].start.push(key);
    intersections[Number(streets[key].end)].end.push(key);
  }
}
var data;
function out() {
  console.log(intersectionAmount);
  data = `${intersectionAmount}\n`;
  for (let i = 0; i < intersections.length; i++) {
    console.log(i);
    data += `${i}\n`;
    console.log(intersections[i].end.length);
    data += `${intersections[i].end.length}\n`;

    for (let j = 0; j < intersections[i].end.length; j++) {
      console.log(intersections[i].end[j] + " 1");
      data += `${intersections[i].end[j] + " 1"}\n`;
    }
  }
}
function main() {
  const fs = require("fs");
  fs.readFileSync("f.txt", "utf-8")
    .split(/\r?\n/)
    .map(function (line, key) {
      if (key == 0) {
        const q = line;
        var firstLine = q.split(" ");
        totaltime = Number(firstLine[0]);
        intersectionAmount = Number(firstLine[1]);
        streetsamount = Number(firstLine[2]);
        carsamount = Number(firstLine[3]);
        pointspercar = Number(firstLine[4]);
      } //   console.log({
      //     intersectionAmount,
      //     carsamount,
      //     pointspercar,
      //     totaltime,
      //     streetsamount,
      //   });
      else if (key < streetsamount + 1) {
        let x = line.split(" ");

        streets[x[2]] = { start: x[0], end: x[1], time: x[3] };
      } else {
        let x = line.split(" ");

        cars.push([x]);
      }
    });
  abc();
  out();
  console.log(data);
  fs.writeFile("Outputf.txt", data, (err) => {
    // In case of a error throw err.
    if (err) throw err;
  });
}
