var express = require('express');
var router = express.Router();
const User  = require("../db/users");

router.post('/register', (req, res) =>{
    /* Bring in the Scheme from users.js in the folder DB. As well as the functions  
     */
    var newUser = new User
    ({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

   User.getUserByUsername(newUser.username,function(err, user){
        if(err) throw err;
        if(user){
            return res.json({success: false, msg:'Username already exist'});
         }
        User.addUser(newUser,function(err, user){ 
            /* Use the function addUser in users.js*/ 
            if(err){
                res.json({success: false, msg:"Failed to register user."});
            }else {
                res.json({success: true, msg:"Succesfully registered user."});
            }
        });  
    });
});

router.post('/authenticate', (req, res) =>{

    var username = req.body.username; 
    var password = req.body.password; 

    console.log(username);
    console.log(password);

    User.getUserByUsername(username,function(err, user){
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg:'User not found'});
       }
        User.comparePassword(password, user.password, function(err, isMatch){
                if(err) throw err; 
                if(isMatch){
                    return res.json({msg:"Password does match"});
                    }
                    else{
                    return res.json({msg:"Password does not match"});
                    } 
            });
    }); 
    
}); 
 
module.exports = router; 