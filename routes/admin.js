const express = require('express');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/add-product', isAuth, adminController.getAddProduct);

router.get('/products', isAuth, adminController.getProducts);

router.post('/add-product', isAuth, adminController.postAddProduct);

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post('/edit-product', isAuth, adminController.postEditProduct);

router.post('/delete-product', isAuth, adminController.postDeleteProduct);

module.exports = router;

// app.use((req,res,next) => {//allows to add middleware function
//     console.log('In the Middleware');
//     next();// "next" function allows the request to travel on to the next middleware. We call it,when we don't want to send a response
// });

// app.use('/', (req,res,next) => {
//     console.log('This always runs');
//     next();
// });
