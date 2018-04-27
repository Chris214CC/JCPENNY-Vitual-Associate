var express = require('express');
var router = express.Router();
const Products  = require("../db/Products");
router.get('/products', (req, res) =>{
    var newProduct = new Products
    ({
        name:'Bike',
        price:45,
        id: 963,
        manufacturer: "BIKEMANUFACTURER"
    });
   
     Products.addProduct(newProduct,function(err, user){ // Store New Products in database. 
        if(err){
            res.json({success: false, msg:"Failed to register Product."});
        }else {
             res.json({success: true, msg:"Succesfully registered Product."});
        }

    });  

});