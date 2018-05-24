var express = require('express');
var router = express.Router();
const Products  = require("../models/Products");
router.get('/addproduct', (req, res) =>{
    /* Bring in the Scheme from Products.js in the folder DB. As well as the functions  
     */
    var newProduct = new Products // Using the Schema. 
    ({
        name:'Bike',
        price:45,
        id: 963,
        manufacturer: "BIKEMANUFACTURER"
    });
   
     Products.addProduct(newProduct,function(err, user){ 
         /* Use the function addProduct in Product.js*/ 
        if(err){
            res.json({success: false, msg:"Failed to register Product."});
        }else {
             res.json({success: true, msg:"Succesfully registered Product."});
        }

    });  

});

module.exports= router; 