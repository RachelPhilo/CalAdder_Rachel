const mongoose =require('mongoose');

const exerciseSchema = mongoose.Schema({
    type:String,
    duration:Number,
    caloriesLost:Number
});

const exerciseModel = mongoose.model('exercise',exerciseSchema);

module.exports = exerciseModel;