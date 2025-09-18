const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    res.send('👥 Tüm kullanıcılar listelenecek');
});

router.get('/:id',(req,res) =>{
    console.log(`Kullanıcı ID : ${req.params.id}`);
});

router.post('/',(req,res) => {
    const newUser = req.body ; 
    res.send(`Yeni kullanıcı eklendi ${JSON.stringify(newUser)}`);
});

module.exports = router ; 