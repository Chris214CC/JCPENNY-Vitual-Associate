var express = require('express');
var router = express.Router();
var User  = require("../models/users");
var config = require('../config/database'); 
var passport = require("passport"); 
var jwt = require('jsonwebtoken')

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

    User.getUserByUsername(username,function(err, user){
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg:'User not found'});
       }
        User.comparePassword(password, user.password, function(err, isMatch){
                if(err) throw err; 
                if(isMatch){
                    var token = jwt.sign(user, config.secret, {
                        expiresIn: 604800
                    });
                    //return res.json({msg:"Password does match"});
                    return res.json({ success: true, token: 'JWT ' + token });
                    }
                    else{
                    return res.json({msg:"Password does not match"});
                    } 
            });
    }); 
    
}); 
router.get('/profile', passport.authenticate('jwt', {session:false}),(req,res) =>{
    res.send('blah');
}); 
module.exports = router; 