var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
  console.log("commitmentController.js working!");
  res.send('commitmentController.js works!');
})

router.get('/:commitmentId',function(req,res){
  console.log('/commitment/:commitmentId route is working!');
  res.send('/commitment/:commitmentId route is working!');
})

router.post('/',function(req,res){
  // console.log('POST /commitment route is working!');
  // console.log('req.body: ' + req.body);
  // console.log('req.body.description: ' + req.body.description);
  // console.log('req.body.trash: ' + req.body.trash);
  // console.log('req.body.actionable :' + req.body.actionable );
  // console.log('req.body.someday :' + req.body.someday );
  // console.log('req.body.reference :' + req.body.reference );
  // console.log('req.body.lessThanTwo :' + req.body.lessThanTwo );
  // console.log('req.body.doItNow :' + req.body.doItNow );
  // console.log('req.body.delegate :' + req.body.delegate );
  // console.log('req.body.delegateName :' + req.body.delegateName );
  // console.log('req.body.doItLater :' + req.body.doItLater );
  // console.log('req.body.calendar :' + req.body.calendar );
  // console.log('req.body.doItWhenever :' + req.body.doItWhenever );
  // console.log('req.body.completed :' + req.body.completed );

  res.send(req.body);

})

module.exports = router;