var http = require("http");
var express= require('express');
var Discounts = require("./db/Discounts");
var Products = require("./db/Products");
var users =  require('./routes/users'); 
var apps = express(); // Used to run server

var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost/VirtualAssociateDB';
var db =  mongoose.connection;
mongoose.connect(mongoDB,function(err){
    if (err) throw err; //  Connect to MONGODB
    console.log('Successfully connected');
});
mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//This is for testing ------->>>
/* let  discount =  Discounts({
    name : 'Bike' , 
    id :   3,
    size: {size1: 6, size2:6},
    rate: 9
});
let product =  Products({
    name: 'Shirt',
    price:96,
    id: 45,
    manufacturer: 'JCPENNY'
});
discount.save(function(err) {// Saves the data to the mongoDB database.
    if (err) throw err;
    console.log('Discounts saved successfully!');
  });
  
  product.save(function(err) {
    if (err) throw err;
    console.log('Products saved successfully!');
  }); */
//console.log(discount.name);

apps.use('/users', users); 
apps.listen(8081); 
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');