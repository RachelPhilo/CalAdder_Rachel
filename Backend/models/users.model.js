const mongoose =require('mongoose');

const userSchema = mongoose.Schema({

    username:String,
    email:String,
    password:String,
    age:Number,
    gender:String,
    country:String,
    height:Number,
    weight:Number,
    goalWeight:Number,
    dailyCalorieRequired:Number
});

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;