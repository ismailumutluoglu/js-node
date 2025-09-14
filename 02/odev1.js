
const fs = require('fs').promises ; 

async function hw1(){
    try {
      await fs.writeFile('notlar.txt','İlk notum');
      console.log('Dosyaya yazma işlemi gerçekleşti.');

      const data = await fs.readFile('notlar.txt','utf-8');
      console.log('Dosya içeriği : ',data);

    } catch (error) {
        console.log(error.message);
    }
}

hw1();