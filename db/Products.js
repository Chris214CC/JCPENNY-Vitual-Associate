var mongoose = require('mongoose');
// Creating moggoose schemmas. 
var ProductsSchema = new mongoose.Schema({
    name: String,
    price:Number,
    id: Number,
    manufacturer: String
});
const Products = mongoose.model('Products', ProductsSchema);
module.exports = Products; 
module.exports.addProduct =  (newProduct, callback) =>{
    newProduct.save(callback); 
};