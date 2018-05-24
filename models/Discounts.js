var mongoose = require('mongoose');
// Creating moggoose schemmas. 
var DiscountsSchema =  new mongoose.Schema({
    name : String , 
    id :   Number,
    size: {size1: Number, size2:Number},
    rate: Number
});
const Discounts=   mongoose.model('Discounts', DiscountsSchema); 

module.exports =  Discounts;  
