var express = require('express');
var router = express.Router();
var db = require('../models');


//FIND all Users
router.get('/', function(req,res){

  db.user.findAll().then(function(users){

    //TEST LOOP
    // if (users){
    // users.forEach(function(taco){
    // console.log('All users: ' + taco.id + '--'+ taco.username + '--' + taco.email + '--' + taco.password);
    // res.send('All Users: ' + taco.username);
    // })};
    // res.send('found all users!');
  })

  //TEST
  // console.log("userController.js working!");
  // res.send('userController.js works!');

})

//FIND one User
router.get('/:userId',function(req,res){

  db.user.find({where:{id:req.params.userId}}).then(function(user){

    //TEST
    // console.log('req.params: ' + req.params);
    // console.log('req.params.userId' + req.params.userId);
    // console.log('found user!' +'--' + user.username + '--' + user.email + '--' + user.password)
    // res.send('You found the user!' + user.username);
  })

    //TEST
    // console.log('/user/:userId route is working!');
    // res.send('/user/:userId route is working!');

})

//CREATE new User
router.post('/', function(req,res){
  db.user.create({username:req.body.username,email:req.body.email,password:req.body.password})
  .then(function(user){
    // console.log('DB Entry worked! created new user' + user +'--'+ user.id +'--'+ user.username +'--'+ user.email +'--' + user.password);
    // res.send('DB entry worked! created new user:' +'--'+ user.id +'--'+ user.username +'--'+ user.email +'--' + user.password);
  })

  //TEST
  // console.log('POST /user route is working!');
  // console.log(req.body);
  // console.log('req.body.username: ' + req.body.username);
  // console.log('req.body.email: ' + req.body.email);
  // console.log('req.body.password: ' + req.body.password);
  // res.send(req.body);
  // res.send('req.body.username: ' + req.body.username);
  // res.send('req.body.email: ' + req.body.email);
  // res.send('req.body.password: ' + req.body.password);
});


//UPDATE a User
router.put('/:userId',function(req,res){

  db.user.find({where:{id:req.params.userId}}).then(function(user){
    user.username = 'Taco Jones';
    user.save().then(function(user){
      // console.log('update worked! username changed to:' + user.username)
    })
  })

  //TEST
  // console.log('PUT /user/:userId  is working!!');
  // res.send('PUT /user/:userId  is working!!');
})


//DELETE a User
router.delete('/:userId',function(req,res){

  db.user.find({where:{id:req.params.userId}}).then(function(user){
    user.destroy().then(function(){

        //TEST
        // console.log('DELETE /user/:userId  worked!!');
        // res.send('DELETE /user/:userId  worked!!');

    })
  })
})






module.exports = router;