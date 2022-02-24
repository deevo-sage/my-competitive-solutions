/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  var str = "";
  const diff = numRows + (numRows > 2 ? Math.ceil(numRows / 2) : 0);
  if (numRows === 1) return s;
  for (let i = 0; i < numRows; i++) {
    for (let j = i; j < s.length; j += diff) {
      str += s[j];
      if (i > 0 && i < numRows - 1) {
        const idx = j + diff - i * 2,
          temp = s[idx];
        if (idx < s.length) str += temp;
        console.log({ temp, idx, j, char: s[j] });
      }
    }
  }
  console.log({ str });
  return str;
};

console.log("PAHNAPLSIIGYIR" === convert("PAYPALISHIRING", 3));
// console.log("PINALSIGYAHRPI" === convert("PAYPALISHIRING", 4));
// console.log("PHASIYIRPLIGAN" === convert("PAYPALISHIRING", 5));
// console.log("ACB" === convert("ABC", 2));
// console.log("ABC" === convert("ABC", 3));

// P   A   H   N
// A P L S I I G
// Y   I   R

// P . . . H
// A . . S I
// Y . I . R
// P L . . I G
// A . . . N

// P . . . . R
// A       I I
// Y     H   N
// P   S .   G
// A I
// L
