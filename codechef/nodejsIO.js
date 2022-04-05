var input_stdin = "";
var chunks = "";
var input_currentline = 0;

// standard input is stored into input_stdin
process.stdin.on("data", function (data) {
  input_stdin += data;
});

// standard input is done and stored into an array
process.stdin.on("end", function () {
  chunks = input_stdin.split("\n");
  start();
});

function start() {
  let n = chunks[0];
  chunks = chunks.filter(function (e) {
    return e;
  });
  for (let i = 1; i <= n; i++) {
    solveProblem(chunks[i]);
  }
}

function solveProblem(arg) {}
