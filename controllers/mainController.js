var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
  console.log("mainController.js working!");
  res.render('main/index');
})

module.exports = router;