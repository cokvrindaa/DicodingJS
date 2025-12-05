// Metode try catch
// akan mencoba kode dan berhenti jika terindikasi dengan eror

try {
  console.log('Memulai program');
  throw new Error('Error: Program berhenti');
} catch (err) {
  console.log('Karena ada error, blok ini akan dieksekusi');
}