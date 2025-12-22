// Encapsulation digunakan untuk mengubah value (dari properti) dari constructor 
class kopi {
  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this.temperature = 90;
  }

  makeCoffe() {
    console.log('buat kopi dengan suhu', this.temperature , 'Watter Amount :' , this.waterAmount);
  }
}

const coffee = new kopi(100);
// Mengubah yang deafultnya 90 menjadi 60
coffee.temperature = 60;

coffee.makeCoffe(); 