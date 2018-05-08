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
module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt){
    bcrypt.hash(newUser.password, salt, function(err, hash) {
    if (err) throw err; 
      newUser.password = hash;  
      newUser.save(callback); 
    });
    });
};
module.exports.getUserByUsername = function(username, callback){
    const query = {username: username};
    User.findOne(query, callback); 
};
module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch){
        if(err) throw err; 
        callback(null, isMatch);
    }); 
}

