var mongoose = require('mongoose');
// Creating moggoose schemmas. 
var ProductsSchema = new mongoose.Schema({
    name: String,
    price:Number,
    id: Number,
    manufacturer: String
});
const Producs =   mongoose.model('Products', ProductsSchema);
module.exports = Producs; 