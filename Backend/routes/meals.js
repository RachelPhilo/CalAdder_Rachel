var express = require('express');
var router = express.Router();


var mongoose =require('mongoose');

const  mealsModel = require('../models/meals.model');

/* GET all meals listing. */
router.get('/list', function(req, res, next) {

  mealsModel.find(function(err,mealsListResponse){
    if(err){
      res.send('send a resource');
    }
    else{
      const recordcCount=customer

    }

  });
  
});

// create new meal
router.post('/add', function(req, res, next) {

  let mealObj = new mealsModel({
    time:'Breakfast',
    category:'Bread',
    quantity:100,
    calorieConsumed:245
  });

  mealObj.save(function(err,mealObj){
    if(err){
      console.log("adding not successful");
    }
    else{
      console.log("Adding successful");
      
    }
  });

  
});


// update meal
router.put('/update', function(req, res, next) {
  res.send('respond with a resource');
});

// delete meal
router.delete('/delete', function(req, res, next) {
  res.send('respond with a resource');
});

// search meal
router.get('/search', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
