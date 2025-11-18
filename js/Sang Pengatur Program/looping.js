// For
// For loop
for (let i = 0; i < 10; i++) {
  console.log(`Ini angka ke ${i} adalah ${i}`);
}

// For in (untuk objek)
const data = {
  nama: "Cok Vrinda",
  asal: "Bali",
  kelahiran: 2010,
};
for (const properti in data) {
  console.log(`${properti} bernilai ${data[properti]}`);
}

// For of (lebih sederhana karena tidak memikirkan propert.)
const nama = ["Ujang", "Dujang", "Manusia"];
for (const item of nama) {
  console.log(item);
}

// While
let i = 0;
while (i < 5) {
  console.log(`Angka ke${i} adalah ${i}.`);
}

// Do while (mengecek kondisi di akhir)
let i2 = 0;
do {
  console.log(`Angka ke-${i2} adalah ${i2}.`);
  i2++;
} while (i2 < 5);