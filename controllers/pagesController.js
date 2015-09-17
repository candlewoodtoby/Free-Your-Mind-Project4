var express = require('express');
var router = express.Router();

router.get('*', function(req,res){
  console.log("pagesController still working!")
  res.render('index');
})

// old routes (disabled)


router.get('/signUp', function(req,res){
  //TEST
  console.log("pagesController.js working!");
  res.render('user/TEST_new');
})

router.get('/logIn', function(req,res){
  //TEST
  res.render('user/TEST_login');
})

module.exports = router;