// Polymorphism, digunakan untuk mendambahkan parameter pada constructur tanpa mengubah construtur yang utama.
class HP {
    constructor(warna, brand, model) {
        this.warna = warna
        this.brand = brand
        this.model = model
    }
    charging() {
        console.log(`charging ${this.model}`);
    }
}
class Android extends HP {
    constructor(warna, brand, model, device) {
        // Super digunakan untuk mendeklarasikan ulang yang sudah ada
        super(warna, brand, model);
        this.device = device;
    }

    charging() {
        super.charging();
        console.log(`Charging ${this.device} with fast charger`);
    }

}
const android = new Android('white', 'B', 'Galaxy S21', 'smart TV');

android.charging();