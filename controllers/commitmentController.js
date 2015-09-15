var express = require('express');
var router = express.Router();
var db = require('../models');


//FIND all Commitments
router.get('/',function(req,res){
  db.commitment.findAll({include:[db.user]}).then(function(commitment){

    //TEST LOOP
    if(commitment){
      commitment.forEach(function(taco){
        console.log(taco.id);
        console.log(taco.description)
      })
    } res.send('found commitments!')

  })
})


//FIND and Show one Commitment
router.get('/show/:commitmentId',function(req,res){

  db.commitment.find({where:{id:parseInt(req.params.commitmentId)}}).then(function(commitment){
    res.render("commitment/TEST_show.ejs",{commitment:commitment});
  })

});


//FIND one Commitment
router.get('/:commitmentId', function(req,res){
  db.commitment.find({where:{id:parseInt(req.params.commitmentId)}}).then(function(commitment){
    console.log('found commitment: ' + commitment.id + commitment.description);
    res.send("found commitment",{commitment:commitment});
  })
})


//CREATE new Commitment
router.post('/',function(req,res){

  db.user.find({where:{ id: parseInt(req.body.userId) }}).then(function(user){
    user.createCommitment({
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
      console.log('Created new commitment!: ' + commitment.get());
      res.redirect('commitment/show/'+commitment.id);
    })
  })

});


//UPDATE a Commitment
router.put('/:commitmentId',function(req,res){
  db.commitment.find({where:{id:parseInt(req.params.commitmentId)}}).then(function(commitment){
    commitment.description = 'I just updated this commitment description - WASH MY DOG!';
    commitment.save().then(function(commitment){
      //TEST
      console.log('commitment update worked!');
      res.send('commitment update worked!')
    })
  })

})



//DELETE a Commitment
router.delete('/:commitmentId',function(req,res){
  db.commitment.find({where:{id:parseInt(req.params.commitmentId)}}).then(function(commitment){
    commitment.destroy().then(function(){
      //TEST
      console.log('Deleted Commitment!');
      res.send('Deleted Commitment!');
    })
  })

})

module.exports = router;