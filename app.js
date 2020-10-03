const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();


app.set('view engine', 'ejs');// allows to set any values globally on our express application
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes  = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));//registers a middleware,does a req body parsing,executes next()
// {extended: false} - should be able to parse none default features
app.use(express.static(path.join(__dirname, 'public')));// for css to be available

app.use('/admin',adminRoutes);// adds "/admin" to each route in "adminData.routes"
app.use(shopRoutes);


app.use(errorController.get404);

app.listen(3000);

