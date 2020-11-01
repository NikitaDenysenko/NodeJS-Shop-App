const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;
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
    User.findById('5f9d88a629e045b28de841d2')
        .then(user => {
            console.log('from app.js:');
            console.log(user);
            req.user = new User(user.name, user.email, user.cart, user._id);
            next();
        })
        .catch(err => {
            console.log(err);
        });
});

app.use('/admin',adminRoutes);// adds "/admin" to each route in "adminData.routes"
app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
    app.listen(3000);
});

