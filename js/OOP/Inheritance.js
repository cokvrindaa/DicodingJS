class HP {
    constructor(warna, brand, model) {
        this.warna = warna
        this.brand = brand
        this.model = model
    }
    charging() {
        console.log(`charging ${this.model + this.brand}`);
    }
}

// Interhance menggunakan extends, yang dinama simple nya seperti penambahan fitur khusus
class IOS extends HP {
    airDrop() {
        console.log('ipong punya aridrop')
    }
}
class Android extends HP {
    finggerPrint() {
        console.log('android punya FP');
    }
}
const ios = new IOS('hitam', 'Pro', '12')
ios.charging()
ios.airDrop()

const android = new Android('Hitam', 'Ultra', 'S25')
android.charging()
android.finggerPrint()
