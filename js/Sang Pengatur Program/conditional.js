// If statement
const score = 80;
if (score > 90) {
  console.log("Kamu mendapatkan nilai A");
} else if (score >= 80) {
  console.log("Selemat anda lulus ujian");
} else {
  console.log("Maaf anda belum lulus ujian");
}

// Tennery
// ? = kondisi jika benar, : = kondisi jika salah
const harga = 100000;
const member = true;
const diskon = member ? 0.1 : 0;
console.log(`anda mendapatkan diskon sebesar${diskon * harga}`);

// Switch case (nilai konstan tertentu, bukan rentang secara langusng, bisa tapi harus pakai true.)
const buah = "apel";
switch (buah) {
  case "apel":
    console.log("Buah apel");
    break;
  case "pisang":
    console.logc("Buah Pisang");
    break;
  case "jeruk":
    console.log("ini buah jeruk");
    break;
  default:
    console.log("Nilai belum di isi");
}

// Switch case dengan date
const hari = new Date().getDay();
switch (hari) {
  case 0:
    console.log("Minggu");
    break;
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jumat");
    break;
  case 6:
    console.log("Sabtu");
    break;
  default:
    console.log("hari tidak valid");
}
