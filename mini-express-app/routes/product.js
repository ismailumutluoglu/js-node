const express = require('express');
const router = express.Router();

router.get('/' , (req,res) => {
    console.log('📦 Tüm ürünler listelenecek');
});

router.get('/' , (req,res) => {
    res.send(`Ürün ID: ${req.params.id}`);
});

router.post('/' , (req,res) => {
    const newProduct = req.body ; 
    res.send(`Yeni ürün eklendi: ${JSON.stringify(newProduct)}`);
});

module.exports = router ; 