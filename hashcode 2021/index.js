"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");
const _ = require("lodash");

var intersections = [],
  streets = {},
  totaltime,
  intersectionAmount,
  streetsamount,
  carsamount,
  pointspercar,
  cardat = [],
  data;
main();

function intersectioninitial() {
  for (let i = 0; i < intersectionAmount; i++) {
    intersections.push({ start: [], end: [] });
  }
  for (var key in streets) {
    intersections[Number(streets[key].start)].start.push(key);
    intersections[Number(streets[key].end)].end.push(key);
  }
}
function output() {
  data = `${intersectionAmount}\n`;
  for (let i = 0; i < intersections.length; i++) {
    data += `${i}\n`;
    data += `${intersections[i].end.length}\n`;

    for (let j = 0; j < intersections[i].end.length; j++) {
      data += `${intersections[i].end[j] + " 1"}\n`;
    }
  }
}
function addcarcounts() {
  for (let i = 0; i < cardat.length; i++) {
    _.forEach(cardat[i].roads, (item) => {
      if (item) {
        streets[item].cars += 1;
      }
    });
  }
}

function main() {
  const fs = require("fs");
  fs.readFileSync("a.txt", "utf-8")
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
      } else if (key < streetsamount + 1) {
        let x = line.split(" ");
        streets[x[2]] = { start: x[0], end: x[1], time: x[3], cars: 0 };
      } else {
        let x = line.split(" ");
        let roadcount = Number(x[0]);
        delete x[0];
        let roads = x,
          carobj = { roadcount, roads };
        cardat.push(carobj);
      }
    });
  addcarcounts();
  intersectioninitial();
  output();
  console.log({ cars: cardat[0].roads, streets });

  fs.writeFile("Outputa.txt", data, (err) => {
    if (err) throw err;
  });
}
