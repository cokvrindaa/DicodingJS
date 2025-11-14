// Pembuatan Object
const user = {
  nama: "Cok Vrinda",
  asal: "Indonesia",
  age: "15",
};
// Nampil biasa
console.log(user.age);

// Mengakses dengan square brackets
console.log(user["asal"]);

// Mengakses menggunakan object destructuring
const { nama, age } = user;
console.log(nama, age);

// Mengubah nilai di object
const akun = {
  uang: 1000,
  deb: 10,
};
akun.uang = 2000;
console.log(akun.uang);

// Menghapus key object
delete user['asal'];
console.log(user);
