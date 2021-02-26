var intersections = [{ road1: ["start","road1"], road2: "end" }, {}];
var streets = {
  road1: {
    start: 0,
    end: 1,
    time: 2,
  },
  road2: {
    start: 3,
    end: 0,
    time: 1,
  },
};
if(intersections[0]["road1"])
{
    var x=streets[intersections[0]["road1"][1]]
}
