const express = require('express');
const app = express();
const usersRouter = require('./routes/users.js');
const productRouter = require('./routes/product.js');
const PORT = 3000 ;

// Middleware örneği (JSON parse için)
app.use(express.json());

// Routerları bağla
app.use('/users',usersRouter);
app.use('/products',productRouter);

// Ana sayfa
app.get('/' , (req,res) => {
    res.send('Hoşgeldin! Mini Express App Ana Sayfa 🚀');
})


// Server dinleme
app.listen(PORT,()=>{
    console.log(`Server http://localhost:${PORT} adresinde çalışıyor`);
})