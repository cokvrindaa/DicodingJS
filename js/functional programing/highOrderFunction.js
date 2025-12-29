function hitung(operation, ...args) {
    return operation(...args);
}
function tambah(a, b, c) {
    return a + b + c;
}
function diskon(diskon, value) {
    return value - ((diskon / 100) * value);
}

const hargaProduk = hitung(tambah, 100, 100, 200);
const denganDiskon = hitung(diskon, 25, hargaProduk);

console.log('harPro:', hargaProduk); 
console.log('dis 25%:', denganDiskon);

// ini berfungsi untuk memangil fungsi lain di dalam fungsi dengan ...args