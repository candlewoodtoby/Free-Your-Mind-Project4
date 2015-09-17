var express = require('express');
var router = express.Router();
var db = require('../models');


//FIND all Users
router.get('/', function(req,res){

  db.user.findAll().then(function(users){
    //TEST LOOP
    if (users){
    users.forEach(function(taco){
    console.log('All users: ' + taco.id + '--'+ taco.username + '--' + taco.email + '--' + taco.password);
    })};
    //Sends array of users to angular view
    res.send(users);
  })

})


//FIND one User
router.get('/:userId',function(req,res){

  db.user.find({where:{id:parseInt(req.params.userId)}}).then(function(user){
    // res.render("user/TEST_show.ejs", {user:user});
    //TEST
    console.log(user.id + user.username);
    res.send(user);
  })
})


//LOGIN User
router.post('/login',function(req,res){
  //TEST
  // console.log(req.body.username);
  // console.log(req.body.password)
  // res.send('You made it to user login router');
  // console.log('req.body: ' , req.body)

  db.user.find({where:{email:req.body.email}}).then(function(user){
    //TEST
    // console.log('found user.email: ' + user.email + '--' + 'password: '+ user.password + 'user.id: ' + user.id);
    console.log('API db sending to $http this user:', user.username);
    // res.redirect('show/' + user.id);
    // res.render('user/TEST_show.ejs',{user:user});
    if(user){
      res.send({result:true, user:user});
    }else{
      res.send({result:false});
    }
  })
})


//FIND and Show one User
router.get('/show/:userId',function(req,res){

  db.user.find({where:{id:parseInt(req.params.userId)}}).then(function(user){

    res.send(user);

  });
})




//CREATE new User
router.post('/', function(req,res){
  db.user.create({
    username:   req.body.username,
    email:      req.body.email,
    password:   req.body.password
  })
  .then(function(user){
    console.log('username: ' + user.username);
    console.log('email: ' + user.email);
    console.log('password: ' + user.password);
    console.log('userId: ' + user.id)
    res.redirect('show/' + user.id);
    // console.log('DB Entry worked! created new user' + user +'--'+ user.id +'--'+ user.username +'--'+ user.email +'--' + user.password);
    // res.send('DB entry worked! created new user:' +'--'+ user.id +'--'+ user.username +'--'+ user.email +'--' + user.password);
  })
});


//UPDATE a User
router.put('/:userId',function(req,res){

  db.user.find({where:{id:parseInt(req.params.userId)}}).then(function(user){
//     // user.username = 'Taco Jones';
//     // user.save().then(function(user){
//     //   // console.log('update worked! username changed to:' + user.username)
//     //   // res.redirect('show/' + user.id);
      console.log('user.id:' + user.id);
      res.send(user);
      // res.redirect('show/' + user.id);
      // res.redirect('show/' + user.id);
    })
  })
//   //TEST
//   // console.log('PUT /user/:userId  is working!!');
//   // res.redirect('show/' + user.id);
// })


//DELETE a User
router.delete('/:userId',function(req,res){

  db.user.find({where:{id:req.params.userId}}).then(function(user){
    user.destroy().then(function(){

        //TEST
        console.log('DELETE /user/:userId  worked!!');
        res.send('DELETE /user/:userId  worked!!');
    })
  })
})


module.exports = router;