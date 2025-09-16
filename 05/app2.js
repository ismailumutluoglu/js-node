const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};
const emitter = new MyEmitter();

const ts = () => new Date().toLocaleString('tr-TR');
const online = new Set(); // kimler online onu gösterecek . 

emitter.on('login', (username) => {
  console.log(`[A] ${username} giriş yaptı - ${ts()}`);
});
emitter.on('logout', (username) => {
  console.log(`[A] ${username} çıkış yaptı - ${ts()}`);
});

emitter.on('login', (username) => {
  online.add(username);
  console.log(`[B] Online: ${online.size} kişi -> ${Array.from(online).join(', ')}`);
});
emitter.on('logout', (username) => {
  online.delete(username);
  console.log(`[B] Online: ${online.size} kişi -> ${Array.from(online).join(', ') || '(boş)'}`);
});

emitter.emit('login', 'Ayşe');
emitter.emit('login', 'Mehmet');
setTimeout(() => emitter.emit('logout', 'Ayşe'), 1500);
setTimeout(() => emitter.emit('login', 'Can'), 2500);
setTimeout(() => emitter.emit('logout', 'Mehmet'), 3500);
setTimeout(() => emitter.emit('logout', 'Can'), 4500);