// function expression
const ferenhitkeCelcius = function (suhu) {
  const rumus = (9 / 5) * suhu + 32;
  return rumus;
};

const tampilHasil = ferenhitkeCelcius(90);
console.log(tampilHasil);

// Frist class citizen
function kali(a, b) {
  return a * b;
}
function hitung(operasi, noA, noB) {
  return operasi(noA, noB);
}
const hasil = hitung(kali, 2, 4);
console.log(hasil);

// Arrow function
const ferenhitkeCelciusArrow = (suhu) => {
  const rumus = (9 / 5) * suhu + 32;
  return rumus;
};
const tampilHasilArrow = ferenhitkeCelciusArrow(90);
console.log(tampilHasilArrow);
