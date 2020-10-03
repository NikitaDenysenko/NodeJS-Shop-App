const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

// app.use((req,res,next) => {//allows to add middleware function
//     console.log('In the Middleware');
//     next();// "next" function allows the request to travel on to the next middleware. We call it,when we don't want to send a response
// });

// app.use('/', (req,res,next) => {
//     console.log('This always runs');
//     next();
// });

module.exports = router;