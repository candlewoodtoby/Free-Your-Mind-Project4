var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
  console.log("userController.js working!");
  res.send('userController.js works!');
})

router.get('/:userId',function(req,res){
  console.log('/user/:userId route is working!');
  res.send('/user/:userId route is working!');
})

router.post('/', function(req,res){
  // console.log('POST /user route is working!');
  // console.log(req.body);
  // console.log('req.body.username: ' + req.body.username);
  // console.log('req.body.email: ' + req.body.email);
  // console.log('req.body.password: ' + req.body.password);
  res.send('POST /user route is working!');
  // res.send(req.body);
  // res.send('req.body.username: ' + req.body.username);
  // res.send('req.body.email: ' + req.body.email);
  // res.send('req.body.password: ' + req.body.password);
});

module.exports = router;