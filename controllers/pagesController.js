var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
  res.render('pages/index');
})

router.get('/signUp', function(req,res){
  // console.log("pagesController.js working!");
  res.render('user/TEST_new');
})

router.get('/logIn', function(req,res){
  res.render('user/TEST_login');
})

module.exports = router;