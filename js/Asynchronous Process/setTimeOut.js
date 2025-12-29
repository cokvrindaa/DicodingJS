// setTimeOut adalah fungsi yang menggunakan untuk menunggu waktu seperti layaknya timmer

// Contoh : Kode ini akan menampilkan "Hallo" dalam 5 detik setelah di start
// 1000 ml = 1 dtk.
const estWaktu = 5000;
setTimeout(() => {
    console.log("Hallo")
}, estWaktu)

// Contoh Studi Kasus cheff menyhidangkan makanan dan Penggunaan Callback:
console.log('anda memesan makanan!');
function buatMakan(callback) {
    waktu = 5000;
    konversiDetik = Math.ceil(waktu / 1000);
    console.log(`Cheff sedang menyiapkan makanan dalam waktu : ${konversiDetik} detik.`);

    setTimeout(() => {
        console.log("Cheff sudah selesai menyiapkan kopi!");
        callback();
    }, waktu);

    
}
function kasihMakan(callback){
    waktu = 2000;
    console.log('Pelayan sedang mengantarkan pesanan');
    setTimeout(() => {
        console.log("Pelayan sudah sampai meja");
        callback();
    },waktu)
}
buatMakan(() => {
    kasihMakan (() => {
        console.log('Pelayan memberikan makanan');
        console.log('Makanan sudah siap untuk di makan!')
    })
})
