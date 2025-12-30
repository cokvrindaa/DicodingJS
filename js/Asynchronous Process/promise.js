// promise digunakan untuk menghindari callback hell/ callback yang menumpuk. Sebelumnya callback kita panggil hanya dua , bayangkan ada 5 atau 10? menumpuk parah bukan!?
function buatMakan(name, callback) {
    return new Promise((resolve, reject) => {
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
                reject(new Error('Gagal menyiapkan makanan'));
                return;
            }
            console.log("Cheff sudah selesai menyiapkan makanan!");
            resolve(name);
        }, waktu);
    })


}
function kasihMakan(name, callback) {
    return new Promise((resolve, reject) => {
        let sukses = false;
        const waktu = 2000;
        console.log('Pelayan sedang mengantarkan pesanan');
        setTimeout(() => {
            const num = Math.random();
            if (num > 0.3) {
                sukses = true;
            }
            if (!sukses) {
                reject(new Error('Gagal mengantarkan makanan'));
                return;
            }
            console.log("Pelayan sudah sampai meja");
            resolve(null, name);
        }, waktu)
    })
}

const order = 'Kopi Espresso';

console.log(`Saya memesan ${order} di kafe.`);

// Chaining
buatMakan(order)
    .then(
        (value) => {
            return kasihMakan(value);
        },
        (error) => {
            console.error(error.message)
        },
    )
    .then(
        (value) => {
            console.log(`Pelayan memberikan ${value} pesanan`);
            console.log(`Saya mendapatkan ${value} dan habiss brooo`)
        },
        (error) => {
            console.error(error.message);
            throw error;
        }
    )
