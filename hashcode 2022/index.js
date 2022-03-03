const fs = require("fs");
const { logic } = require("./main");
function main() {
  const files = ["a", "b", "c", "d", "e", "f"];
  for (let i = 0; i < files.length; i++) {
    InOut(files[i], "output" + i + ".txt");
  }
}
const InOut = (inFile, outFile) => {
  const input = fs.readFileSync("./inputs/" + inFile + ".txt", "utf-8");
  const lines = input.split("\n");
  const output = logic(lines);
  fs.writeFileSync("./outputs/" + outFile, output);
};
main();
