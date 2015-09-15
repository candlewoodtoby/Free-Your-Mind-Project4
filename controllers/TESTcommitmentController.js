var express = require('express');
var router = express.Router();
var db = require('../models');


//FIND all Commitments
router.get('/', function(req,res){

  db.commitment.findAll().then(function(commitment){

    //TEST LOOP
    // if (commitment){
    //   commitment.forEach(function(taco){
    //     console.log(taco.id + '--' + taco.description);
    //   })
    // }
    // res.send('Found all your commitments!');

  })

  //TEST
  // console.log("commitmentController.js working!");
  // res.send('commitmentController.js works!');
})



//FIND one Commitment
router.get('/:commitmentId',function(req,res){

  db.commitment.find({where:{id:req.params.commitmentId}}).then(function(commitment){

    //TEST
    // console.log('commitment found!: ' + commitment);
    // console.log('commitment description: ' + commitment.description);
    // res.send('commitment description: ' + commitment.description);
  })

  //TEST
  // console.log('req.params: ' + req.params);
  // console.log('req.params.commitmentId: ' + req.params.commitmentId);


  //TEST
  // console.log('/commitment/:commitmentId route is working!');
  // res.send('/commitment/:commitmentId route is working!');
})



//CREATE new Commitment
router.post('/',function(req,res){

  db.user.createCommitment({
    description:  req.body.description,
    actionable:   req.body.actionable,
    trash:        req.body.trash,
    someday:      req.body.someday,
    reference:    req.body.reference,
    lessThanTwo:  req.body.lessThanTwo,
    doItNow:      req.body.doItNow,
    doItLater:    req.body.doItLater,
    doItWhenever: req.body.doItWhenever,
    delegate:     req.body.delegate,
    delegateName: req.body.delegateName,
    calendar:     req.body.calendar,
    completed:    req.body.completed
  }).then(function(commitment){

      //TEST
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
  });

  res.send(req.body);

});
//END CREATE new Commitment

//UPDATE a Commitment
router.put('/:commitmentId',function(req,res){
  db.commitment.find({where:{id:req.params.commitmentId}}).then(function(commitment){
    commitment.description = 'I want to eat many Tacos one day!';
    commitment.save().then(function(commitment){
      //TEST
      // console.log('update worked! commitment description changed to:' + commitment.description)
      // res.send('Update worked!')
    })
  })
})

//DELETE a user
router.delete('/:commitmentId',function(req,res){
  db.commitment.find({where:{id:req.params.commitmentId}}).then(function(commitment){
    commitment.destroy().then(function(){
      //TEST
      // console.log('DELETE /commitment/:commitmentId worked!');
      // res.send('DELETE /commitment/:commitmentId worked!');
    })
  })
})

module.exports = router;