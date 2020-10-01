const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-product', (req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});

// app.use((req,res,next) => {//allows to add middleware function
//     console.log('In the Middleware');
//     next();// "next" function allows the request to travel on to the next middleware. We call it,when we don't want to send a response
// });

// app.use('/', (req,res,next) => {
//     console.log('This always runs');
//     next();
// });

module.exports = router;