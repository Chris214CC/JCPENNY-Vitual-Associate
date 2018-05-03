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
   
    User.addUser(newUser,function(err, user){ 
          /* Use the function addUser in users.js*/ 
        if(err){
            console.log(JSON.stringify(newUser));
            res.json({success: false, msg:"Failed to register user."});
        }else {
             res.json({success: true, msg:"Succesfully registered user."});
        }
    });  
    
    //console.log(newUser);
   
});
 
module.exports = router; 