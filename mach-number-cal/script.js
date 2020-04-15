var MM = document.getElementById("MM");
var MV = document.getElementById("MV");
var Ma = document.getElementById("Ma");
var aa = document.getElementById("aa");
var aY = document.getElementById("aY");
var aR = document.getElementById("aR");
var aT = document.getElementById("aT");
var KY = document.getElementById("KY");
var KR = document.getElementById("KR");

KY.value = 1.4;
KR.value = 288.3;
onchangeKY();
onchangeKR();
aT.value = 273.15;
onchangeaT();
MV.value = 340;
onchangeMV();

function onchangeMV() {
  MM.innerHTML = MV.value/Ma.value;
}
function onchangeMa() {
  onchangeMV();
  aa.value = Ma.value;
  onchangeaa();
}

function onchangeaa() {
  aT.value = aa.value * aa.value / (aY.innerHTML * aR.innerHTML)
  Ma.value = aa.value;
  onchangeMV();
}
function onchangeaT() {
  aa.value = Math.sqrt(aY.innerHTML * aR.innerHTML * aT.value);
  onchangeaa();
  onchangeMV();
}

function onchangeKY() {
  aY.innerHTML = KY.value;
  onchangeaT();
  onchangeMV();
}
function onchangeKR() {
  aR.innerHTML = KR.value;
  onchangeaT();
  onchangeMV();
}
