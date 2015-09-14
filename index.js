var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');


var pagesController = require('./controllers/pagesController.js');
var userController = require('./controllers/userController.js');
var commitmentController = require('./controllers/commitmentController.js');
var actionController = require('./controllers/actionController.js');

app.set('view engine','ejs');
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended:true}));


app.use('/', pagesController);

app.use('/api/user', userController);
app.use('/api/commitment', commitmentController);
app.use('/api/action', actionController);

app.listen(3000);