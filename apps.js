var http = require("http");
var express= require('express');
var bodyParser = require('body-parser');
/*  */
var Discounts = require("./db/Discounts");
var Products = require('./routes/products');
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

/* User request first come through here. So for the user path it goes like /users/abc */
apps.get('/index.html', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});

apps.get('/testing.html', function(req, res) {
    res.sendFile(__dirname + "/" + "testing.html");
});
apps.use(bodyParser.urlencoded({ extended: true }));
apps.use('/users', users); 
apps.use('/products',Products);
apps.listen(8081); 

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');