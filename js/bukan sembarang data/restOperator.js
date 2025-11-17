// rest operator untuk function
function muridData(...nama) {
  console.log(nama.length);
  console.log("Nama murid: ", nama);
}
muridData("Bujang", "Dujuang", "Manusia", "Orangan");

// rest operator untuk array
const makanan = ["Nasgor Goreng", "Telgor Goreng", "Bakso", "Ayam Gorong ACK"];
const [satu, dua, ...sisa] = makanan;
console.log(satu);
console.log(dua);
console.log(sisa);
