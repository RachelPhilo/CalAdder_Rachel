const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/CalAdder');

const userSchema = new mongoose.Schema({

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