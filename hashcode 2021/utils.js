var data
function out() {
    
  data = `${intersectionAmount}\n`;
  for (let i = 0; i < intersections.length; i++) {
    data += `${i}\n`;
    data += `${intersections[i].end.length}\n`;

    for (let j = 0; j < intersections[i].end.length; j++) {
      data += `${intersections[i].end[j] + " 1"}\n`;
    }
  }
} 
module.exports = {out,data};