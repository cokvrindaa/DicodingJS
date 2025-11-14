// Membuat array
// object constructor
const user = new Array("Jhon", "Jane", "Jack", "jill");
console.log(user);

// Array literal
const buah = ["apple", "banana", "cherry"];
console.log(buah);

// Mengakses elemen tertentu pada array
const angka = [42, 55, 30];
console.log(angka[1]);

// Manipulasi nilai array
// Menggunakan indexing
let angkaku = [1, 2, 3, 4, 5];
angkaku[1] = 10;
console.log(angkaku);

// Menggunakan push
let arraypush = [1, 2, 3, 4, 5];
arraypush.push(6);
console.log(arraypush);

// Menghapus nilai array
// Menggunakan delete
let os = ["Android", "Windows", "MacOs", "Linux", "IOS"];
delete os[0];
console.log(os); // akan keluar <1 empty item>

// Menggunakan splice
let hp = ["Samsung", "Iphone", "Xioami"];
hp.splice(0, 2);
console.log(hp);
