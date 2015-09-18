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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/assets'));


app.use('/logIn', pagesController);
app.use('/signUp', pagesController);

app.use('/api/user', userController);
app.use('/api/commitment', commitmentController);
app.use('/api/action', actionController);

app.use(pagesController);

app.listen(process.env.PORT || 80);