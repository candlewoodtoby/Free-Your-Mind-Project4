var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
  console.log("pagesController.js working!");
  res.render('pages/index');
})

module.exports = router;