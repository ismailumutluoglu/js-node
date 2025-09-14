// NPM module
// npm i nodemon -g ile nodemonu indirebilirsin
// nodemon yazıp aktif etmelisin

// npm init   * package.json * dosyasını oluşturur.

const { format } = require('date-fns');
console.log(format(new Date() , 'yyyy/MMdd\tHH:mm:ss'));

const { v4 : uuid } = require('uuid');
console.log(uuid());
console.log();