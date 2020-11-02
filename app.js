const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();


app.set('view engine', 'ejs');// allows to set any values globally on our express application
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes  = require('./routes/shop');

//MIDDLEWARES
app.use(bodyParser.urlencoded({extended: false}));//registers a middleware,does a req body parsing,executes next()
// {extended: false} - should be able to parse none default features
app.use(express.static(path.join(__dirname, 'public')));// for css to be available

app.use((req,res,next) => {
    User.findById('5f9eb7ec4c156a179c897cf9')
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => {
            console.log(err);
        });
});

app.use('/admin',adminRoutes);// adds "/admin" to each route in "adminData.routes"
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
    .connect('mongodb+srv://denchik:1234@cluster0.4rra9.mongodb.net/shop?retryWrites=true&w=majority')
    User.findOne().then(user => {
        if(!user) {
            const user = new User({
                name: 'Nick',
                email: 'test@test.com',
                cart: {
                    items: []
                }
            });
            user.save();
        }
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });

