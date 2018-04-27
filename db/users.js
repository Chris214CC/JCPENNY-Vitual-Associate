const mongoose= require("mongoose");
const bcrypt = require("bcryptjs");

var userSchema =  mongoose.Schema({
    name:{
        type : String
    }, 
    email: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String, 
        required: true
    }
}); 
const User = mongoose.model('User', userSchema);
module.exports = User; 
module.exports.age = 68;
module.exports.addUser = function(newUser, callback){
    newUser.save(callback); 
};
module.exports.testing = function(msg){
    console.log(msg); 
};
