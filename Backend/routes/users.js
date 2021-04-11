var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

const  userModel = require('../models/users.model');


/* GET userdetails listing. */
router.get('/list', function(req, res, next) {
  
  const userId=req.query.userId;

  userModel.findById(userId,function(err,userResponse){

    if(err){
      res.send({status:500,message:'Unable to find user'});

    }
    else{
      
      res.send({status:200,results:userResponse});
    }

  });
  
  // res.send('respond with a resource');
});

/* Create new user */
router.post('/add', function(req, res, next) {

  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  let age = req.body.age;
  let gender = req.body.gender;
  let country = req.body.country;
  let height = req.body.height;
  let weight = req.body.weight;
  let goalWeight = req.body.goalWeight;
  let dailyCalorieRequired = req.body.dailyCalorieRequired;


  let userObj = new userModel({

    username:username,
    email:email,
    password:password,
    age:age,
    gender:gender,
    country:country,
    height:height,
    weight:weight,
    goalWeight:goalWeight,
    dailyCalorieRequired:dailyCalorieRequired
  });

  userObj.save(function(err,userObj){
    res.send('respond with a resource');
    
    if(err){
      res.send({status:500,message:'Unable to add customer'});

    }
    else{
      res.send({status:200,message:'User added successfully',userDetails:userObj});
    }
  });

  // res.send('respond with a resource');
});

/* Update existing userdetails */
router.put('/update', function(req, res, next) {

  const userId=req.body.userId;

  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  let age = req.body.age;
  let gender = req.body.gender;
  let country = req.body.country;
  let height = req.body.height;
  let weight = req.body.weight;
  let goalWeight = req.body.goalWeight;
  let dailyCalorieRequired = req.body.dailyCalorieRequired;


  
  let userObj ={

    username:username,
    email:email,
    password:password,
    age:age,
    gender:gender,
    country:country,
    height:height,
    weight:weight,
    goalWeight:goalWeight,
    dailyCalorieRequired:dailyCalorieRequired
  };

  userModel.findByIdAndUpdate(userId,userObj,function(err,userResponse){

    if(err){
      res.send({status:500,message:'Unable to update user'});

    }
    else{
      
      res.send({status:200,results:userResponse});
    }

  });

  // res.send('respond with a resource');
});

module.exports = router;
