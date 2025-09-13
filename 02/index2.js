const fs = require('fs').promises;

async function dosyaIslemleri() {
  try {
    // Dosya yazma
    await fs.writeFile('ornek.txt', 'Merhaba, bu bir test dosyasıdır!');
    console.log('Dosya yazıldı!');

    // Dosya okuma
    const data = await fs.readFile('ornek.txt', 'utf8');
    console.log('Dosya içeriği:', data);
    // Dosyaya ekleme
    await fs.appendFile('ornek.txt', '\nEklenen yeni satır!');
    console.log('Veri eklendi!');
  } catch (err) {
    console.error('Hata:', err.message);
  }
}

dosyaIslemleri();