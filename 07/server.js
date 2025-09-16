const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;


app.get('/', (req, res) => {
    // res.sendFile('./views/index.html' , {root : __dirname}); 
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/new-page.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.get('/old-page.html', (req, res) => {
    res.redirect(301, './new-page.html'); // 302 default  ama doğru olanı 301 . 
});


// Route handlers 

app.get('/hello', (req, res, next) => {
    console.log("ahaahaa");
    next();
}, (req, res) => {
    res.send("hauhauhauhau");
})


// chaining route handlers

const one = (req, res, next) => {
    console.log("one");
    next();
}

const two = (req, res, next) => {
    console.log("two");
    next();
}

const three = (req, res, next) => {
    console.log("three");
    res.send("zuahahha");
}

app.get('/chain', [two, one, three]);


app.get('/pages', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));