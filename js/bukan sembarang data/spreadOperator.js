//Spread operator pada object
const obj1 = { nama: "Cok Vrinda" };
const obj2 = { lastNama: "Chandra", alamat: "Denpasar, Bali" };
const objGabung = { ...obj1, ...obj2 };
console.log(objGabung);

// Spread operator pada array
const objA1 = ["Cok Vrinda"];
const objA2 = ["Chandra Dasa", "Denpasar Bali"];
const objAGabung = [...objA1, objA2];
