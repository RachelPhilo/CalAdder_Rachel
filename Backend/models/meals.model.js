const mongoose =require('mongoose');

const mealSchema = mongoose.Schema({
    time:String,
    category:String,
    quantity:Number,
    calorieConsumed:Number
});

const mealModel = mongoose.model('meals',mealSchema);

module.exports = mealModel;