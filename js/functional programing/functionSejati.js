// impure function Fungsi yang menghasilkan nilai yang TIDAK SAMA dan pemanggilan nya BERGANTUNG di dalamnya.
let val = 0
function add(addVal) {
    val += addVal
    console.log(`value yang sekarang ${val}`);
    return val;
}
const hasil1 = add(1);
const hasil2 = add(1);
console.log(hasil1, hasil2);

// pure function Fungsi yang menghasilkan nilai yang SAMA dan pemanggilan nya TIDAK BERGANTUNG di dalamnya.
function tambah(val, addVal) {
    return val + addVal
}
const hasil3 = tambah(0, 1);
const hasil4 = tambah(hasil3, 1);
console.log(hasil3, hasil4)