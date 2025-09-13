/* 
Node.js'de dosya işlemleri için fs modülü kullanılır.
Bu modül, Node.js’nin çekirdek bir parçasıdır ve ayrı bir kurulum gerektirmez.
Kullanmak için modülü şu şekilde içe aktarırız:
*/
const fs = require('fs') ; 

// Asenkron dosya okuma 

fs.readFile('./files/example.txt','utf-8',(err,data) => {
    if(err){
        console.error(err);
        return ; 
    }
    console.log("dosya içeriği (asenkron olarak okuma) : ",data);
});

// Senkron dosya okuma işlemi 

try {
    const data = fs.readFileSync('./files/example.txt','utf-8');
    console.log("Dosya içeriği (Senkron olarak okuma) : ",data);
} catch (err) {
    console.log(err.message);
}

//Asenkron yazöa 

const content = 'Bu dosya Node.js ile yazıldı!';

fs.writeFile('./files/newFile.txt',content,(err) => {
    if(err){
        console.log(err.message);
        return ; 
    }
    console.log('Dosya yazıldı');
});


//Senkron dosya yazma

const content2 = 'Bu dosya da  Node.js ile ekleme yapıldı';

try {
  fs.writeFileSync('./files/yeniDosya.txt', content2);
  console.log('Dosya yazıldı!');
} catch (err) {
  console.error('Hata:', err.message);
}


const content3 = '\nYeni satır eklendi!';

fs.appendFile('./files/yeniDosya.txt',content3, (err) => {
  if (err) {
    console.error('Hata:', err.message);
    return;
  }
  console.log('Veri eklendi!');
});

