const mongoose =require('mongoose');

const mealSchema = mongoose.Schema({

    mealId:Number,
    userId:Number,
    time:String,
    category:String,
    itemId:Number,
    quantity:Number,
    calorieConsumed:Number,
    mealDate:Date
});

const mealModel = mongoose.model('meals',mealSchema);

module.exports = mealModel;