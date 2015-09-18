var express = require('express');
var router = express.Router();
var db = require('../models');


//FIND all Actions
router.get('/', function(req,res){
  db.action.findAll({include:[db.commitment]}).then(function(action){
    //TEST
    // console.log(action);
    if(action){
      action.forEach(function(taco){
        console.log(taco.id);
        console.log(taco.description);
        console.log(taco.completed)
      })
    } res.send(action);

  })
  //TEST
  // console.log("actionController.js working!");
  // res.send('actionController.js works!!');
})


//FIND all Actions the belong to a Commitment
router.post('/show/commitment',function(req,res){
  db.commitment.find({where:{ id: parseInt(req.body.commitmentId)}}).then(function(commitment){
    db.action.findAll({where:{commitmentId:parseInt(commitment.id)}}).then(function(action){
      // if(action){
      //   action.forEach(function(taco){
      //     console.log(taco.id)
      //     console.log(taco.description)

      //   })
      // } res.send('found all actions for commitment:' + commitment.id);
      res.send(action);
    })
  })
})



//FIND and Show one Action
router.get('/:actionId',function(req,res){

  db.action.find({where:{id:parseInt(req.params.actionId)}}).then(function(action){
    //TEST
    console.log('Action Id: ' + action.id + '--' + 'Description: '+ action.description + '--' + 'Completed?:'+ action.completed)
    console.log('Action belongs to Commitment Id: ' + action.commitmentId);
    res.send('found one action!')
  })

})


//CREATE new Action
router.post('/',function(req,res){

  db.commitment.find( {where: { id:parseInt(req.body.commitmentId) } } ).then(function(commitment){

    commitment.createAction({
      description:  req.body.description,
      completed:    req.body.completed
    }).then(function(action){
      console.log('Created new action!:');
      console.log(action);
      res.send('Created new action!')
    })
  })

  // TEST
  // console.log('POST /action route is working!')
  // console.log(req.body);
  // console.log('req.body.description: ' + req.body.description);
  // console.log('req.body.completed: ' + req.body.completed);
  // console.log('req.body.commitmentId: ' + req.body.commitmentId);
  // res.send(req.body);
})



//UPDATE an Action
router.put('/:actionId', function(req,res){
  db.action.find({where:{id:parseInt(req.params.actionId)}}).then(function(action){
    action.description = "I just updated this action! - WASH MY FEET";
    action.save().then(function(action){
      console.log('action update worked!');
      res.send('action update worked!')
    })
  })
})



//DELETE an Action
router.delete('/:actionId',function(req,res){
  db.action.find({where:{id:parseInt(req.params.actionId)}}).then(function(action){

    // console.log(action);
    // console.log(action.id);
    action.destroy().then(function(){
      //TEST
      console.log('Deleted Action!');
      res.send('Deleted Action!');
    })
  })
})

module.exports = router;