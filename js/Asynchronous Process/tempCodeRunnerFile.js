function buatMakan(name, callback) {
    const waktu = 5000;
    let sukses = false;
    konversiDetik = Math.ceil(waktu / 1000);
    console.log(`Cheff sedang menyiapkan makanan dalam waktu : ${konversiDetik} detik.`);

    setTimeout(() => {
        const num = Math.random();
        if (num > 0.3) {
            sukses = true;
        }
        if (!sukses) {
            callback(new Error('Gagal menyiapkan makanan', null));
            return;
        }
        console.log("Cheff sudah selesai menyiapkan makanan!");
        callback(null, name);
    }, waktu);


}
function kasihMakan(name, callback) {
    const waktu = 2000;
    console.log('Pelayan sedang mengantarkan pesanan');
    setTimeout(() => {
        const num = Math.random();
        if (num > 0.3) {
            sukses = true;
        }
        if (!sukses) {
            callback(new Error('Gagal mengantarkan makanan', null));
            return;
        }
        console.log("Pelayan sudah sampai meja");
        callback(null, name);
    }, waktu)
}