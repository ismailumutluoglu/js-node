// JSON DOSYALARI
// JSON dosyaları, yapılandırılmış veri saklamak için sıkça kullanılır.


const fs = require('fs').promises;

async function jsonIslemleri() {
  try {
    // JSON dosyasına yazma
    const veri = { ad: 'Ali', yas: 25 };
    await fs.writeFile('kullanici.json', JSON.stringify(veri, null, 2));

    // JSON dosyasını okuma
    const data = await fs.readFile('kullanici.json', 'utf8');
    const parsedData = JSON.parse(data);
    console.log('Kullanıcı:', parsedData);
  } catch (err) {
    console.error('Hata:', err.message);
  }
}

jsonIslemleri();