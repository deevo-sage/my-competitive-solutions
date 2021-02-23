var res = document.getElementById("res"),
  btn0 = document.getElementById("btn0"),
  btn1 = document.getElementById("btn1"),
  btnClr = document.getElementById("btnClr"),
  btnEql = document.getElementById("btnEql"),
  btnSum = document.getElementById("btnSum"),
  btnSub = document.getElementById("btnSub"),
  btnMul = document.getElementById("btnMul"),
  btnDiv = document.getElementById("btnDiv");
function b0cl() {
  res.innerHTML += "0";
}
function b1cl() {
  res.innerHTML += "1";
}
function bccl() {
  res.innerHTML = "";
}
function becl() {
  let arrsum = res.innerHTML.split("+"),
    arrsub = res.innerHTML.split("-"),
    arrmul = res.innerHTML.split("*"),
    arrdiv = res.innerHTML.split("/");
  console.log({ arrsum, arrsub, arrmul, arrdiv });
  if (arrsum.length > 1) {
    let bin = [parseInt(arrsum[0], 2), parseInt(arrsum[1], 2)];
    console.log({ bin });
    res.innerHTML = (bin[0] + bin[1]).toString(2);
  } else if (arrsub.length > 1) {
    let bin = [parseInt(arrsub[0], 2), parseInt(arrsub[1], 2)];
    res.innerHTML = (bin[0] - bin[1]).toString(2);
  } else if (arrmul.length > 1) {
    let bin = [parseInt(arrmul[0], 2), parseInt(arrmul[1], 2)];
    res.innerHTML = (bin[0] * bin[1]).toString(2);
  } else if (arrdiv.length > 1) {
    let bin = [parseInt(arrdiv[0], 2), parseInt(arrdiv[1], 2)];
    res.innerHTML = (bin[0] / bin[1]).toString(2);
  }
}
function bSumcl() {
  res.innerHTML += "+";
}
function bSubcl() {
  res.innerHTML += "-";
}
function bmcl() {
  res.innerHTML += "*";
}
function bdcl() {
  res.innerHTML += "/";
}
function dec2Bin(dec) {
  return [Number(dec[0]).toString(2), Number(dec[1]).toString(2)];
}
