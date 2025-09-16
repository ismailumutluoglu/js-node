const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };

const emitter = new MyEmitter();

const ts = () => new Date().toLocaleString('tr-TR');

emitter.on('login', (username) => {
    console.log(`${username} sisteme giris yapti  [${ts()}]`);
})

emitter.on('logout', (username) => {
    console.log(`${username} sistemden cikis yapti [${ts()}]`);
})

setTimeout(() => emitter.emit('login', 'İsmail'), 2000);
setTimeout(() => emitter.emit('logout', 'Umutluoğlu'), 5000);