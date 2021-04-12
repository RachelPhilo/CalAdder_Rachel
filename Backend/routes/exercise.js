var express = require('express');
var router = express.Router();

var mongoose =require('mongoose');
const  exerciseModel = require('../models/exercise.model');

/* GET exercise listing. */
router.get('/list', function(req, res, next) {
  
  res.send('respond with a resource');
});

// create new exercise
router.post('/add', function(req, res, next) {

  let exrObj = new exerciseModel({
    type:'Aerobic',
    duration:120,
    caloriesLost:345
  });

  exrObj.save(function(err,mealObj){
    if(err){
      console.log("adding not successful");
    }
    else{
      console.log("Adding successful");
      
    }
  });

  
});


// update exercise
router.put('/update', function(req, res, next) {
  res.send('respond with a resource');
});

// delete exercise
router.delete('/delete', function(req, res, next) {
  res.send('respond with a resource');
});

// search exercise
router.get('/search', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
