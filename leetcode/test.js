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
const isSumEven = (num) => {
  const sum = num.split("").reduce((prev, curr) => {
    // console.log({prev,curr,a:parseInt(curr)})
    return prev + parseInt(curr);
  }, 0);
  return sum % 2 === 0;
};
function solveProblem(a) {
  const sum = a.split("").reduce((prev, curr) => {
    // console.log({prev,curr,a:parseInt(curr)})
    return prev + parseInt(curr);
  }, 0);
  const sumIsEven = sum % 2 === 0;
  // console.log(sum , isEven,sumIsEven,a,parseInt(a)%2, a.split(''))
  let i = parseInt(sum) + 1;
  while (true) {
    if (isSumEven(i.toString()) !== sumIsEven) {
      console.log(i);
      break;
    } else i++;
  }
}
