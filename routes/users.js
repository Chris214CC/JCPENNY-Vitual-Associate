var express = require('express');
var router = express.Router();
const User  = require("../db/users");
router.get('/abc', (req, res) =>{
    var newUser = new User
    ({
        name: 'Chris',
        email: 'romerochristopher45@yahoo.com',
        username:'Blaah',
        password:'1234'
    });
   
     User.addUser(newUser,function(err, user){
        if(err){
            res.json({success: false, msg:"Failed to register user."});
        }else {
             res.json({success: true, msg:"Succesfully registered user."});
        }

    });  
  
    
    //User.testing("Hello");
});
 
module.exports = router; 