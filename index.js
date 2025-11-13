alert("Saytimga Xush Kelibsiz");

const elnum1 = document.querySelector(".inp");
const elan = document.querySelector(".answer");
const elnum2 = document.querySelector(".inp2");
const elas = document.querySelector(".btn");
const elpl = document.querySelector(".btn1");
const elsu = document.querySelector(".btn2");
const elde = document.querySelector(".btn3");
const elmu = document.querySelector(".btn4");
const elmo = document.querySelector(".btn5");
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function div(a, b) {
  return a / b;
}
function mul(a, b) {
  return a * b;
}
function mod(a, b) {
  return a % b;
}

elpl.addEventListener("click", () => {
  const first = Number(elnum1.value.trim());
  const second = Number(elnum2.value.trim());
  const anAd = add(first, second);
  elan.value = anAd;
});
elas.addEventListener("click", () => {
  elnum1.value = " ";
  elnum2.value = " ";
  elan.value = " ";
});
elsu.addEventListener("click", () => {
  const first = Number(elnum1.value.trim());
  const second = Number(elnum2.value.trim());
  const anSub = sub(first, second);
  elan.value = anSub;
});
elde.addEventListener("click", () => {
  const first = Number(elnum1.value.trim());
  const second = Number(elnum2.value.trim());
  const anDiv = div(first, second);
  elan.value = anDiv;
});
elmu.addEventListener("click", () => {
  const first = Number(elnum1.value.trim());
  const second = Number(elnum2.value.trim());
  const anMul = mul(first, second);
  elan.value = anMul;
});
elmo.addEventListener("click", () => {
  const first = Number(elnum1.value.trim());
  const second = Number(elnum2.value.trim());
  const anMod = mod(first, second);
  elan.value = anMod;
});
