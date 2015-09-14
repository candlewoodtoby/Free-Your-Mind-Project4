var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');

var mainController = require('./controllers/mainController.js');

app.set('view engine','ejs');
app.use(ejsLayouts);


app.use('/', mainController);




app.listen(3000);