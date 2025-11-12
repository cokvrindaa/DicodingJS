// yang ada di dalan kurung ini adalah parameter
function ferenhitkeCelcius(suhu = 50) {
  const rumus = (9 / 5) * suhu + 32;
  console.log(rumus);
}
const input = 90;
ferenhitkeCelcius();
ferenhitkeCelcius(input);

// Penggunaan return
function tambah(a, b){
  const hasil = a + b;
  return hasil;
}
const hasil = tambah(2,2); //4
console.log(hasil);

// improvisasi kode menggunakan return
function ferenhitkeCelciusBaru(suhu) {
  const rumus = (9 / 5) * suhu + 32;
  return rumus;
}
const hasilbaru = ferenhitkeCelciusBaru(90); //194
console.log(hasilbaru);