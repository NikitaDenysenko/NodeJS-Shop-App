const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;

// app.use((req,res,next) => {//allows to add middleware function
//     console.log('In the Middleware');
//     next();// "next" function allows the request to travel on to the next middleware. We call it,when we don't want to send a response
// });

// app.use('/', (req,res,next) => {
//     console.log('This always runs');
//     next();
// });

