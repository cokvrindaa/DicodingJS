// Membuat map
const produkMap = new Map([
  ["sepatu", 500],
  ["baju", 300],
  ["celana", 250],
]);
console.log(produkMap);

// Menambahkan value
produkMap.set("jeans", 200);
console.log(produkMap);

// Mengakses nilai tertentu
console.log(produkMap.get("sepatu"));

// Mengahpus nilai key
produkMap.delete("celana");
console.log(produkMap);
