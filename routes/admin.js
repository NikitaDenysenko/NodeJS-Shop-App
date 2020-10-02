const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req,res,next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
});

router.post('/add-product',(req,res,next) => {
    products.push({title: req.body.title});
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

exports.routes = router;
exports.products = products;