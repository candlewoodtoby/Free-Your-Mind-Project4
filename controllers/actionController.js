var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
  console.log("actionController.js working!");
  res.send('actionController.js works!!');
})

router.get('/:actionId',function(req,res){
  console.log('/action/:actionId route is working!');
  res.send('/action/:actionId route is working!');
})

router.post('/',function(req,res){
  console.log('POST /action route is working!')
  console.log(req.body);
  console.log('req.body.description: ' + req.body.description);
  console.log('req.body.completed: ' + req.body.completed);
  res.send(req.body);
})

module.exports = router;