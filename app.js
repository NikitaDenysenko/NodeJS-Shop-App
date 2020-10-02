const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');// allows to set any values globally on our express application
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes  = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));//registers a middleware,does a req body parsing,executes next()
// {extended: false} - should be able to parse none default features
app.use(express.static(path.join(__dirname, 'public')));// for css to be available

app.use('/admin',adminData.routes);
app.use(shopRoutes);


app.use((req,res,next) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found',
        path: null
    })
});

app.listen(3000);

