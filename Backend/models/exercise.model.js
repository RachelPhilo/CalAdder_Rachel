const mongoose =require('mongoose');

const exerciseSchema = mongoose.Schema({

    exerciseId:Number,
    userId:Number,
    typeId:Number,
    duration:Number,
    caloriesLost:Number
});

const exerciseModel = mongoose.model('exercise',exerciseSchema);

module.exports = exerciseModel;