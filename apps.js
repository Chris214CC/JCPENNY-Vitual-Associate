var express= require('express');
var bodyParser = require('body-parser');
var path =  require('path');
var cors = require ('cors');
var config = require("./config/database");

var passport = require('passport');
var jwt = require('jsonwebtoken');
var morgan = require('morgan');

var Products = require('./routes/products');
var users =  require('./routes/users'); 
var apps = express(); // Used to run server

var mongoose = require('mongoose');
var db =  mongoose.connection;

mongoose.connect(config.database,function(err){
    if (err) throw err; //  Connect to MONGODB
    console.log('Successfully connected');
});
mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Testing  registration route
apps.get('/index.html', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});apps.get('/testing.html', function(req, res) {
    res.sendFile(__dirname + "/" + "testing.html");
});


/* Static Folder  */
apps.use(express.static(path.join(__dirname,'public'))); 

//Body-parser middleware
apps.use(bodyParser.urlencoded({ extended: true }));

//Cors middleware  
apps.use(cors());

//Passport middleware
apps.use(passport.initialize()); 
apps.use(passport.session()); 

require('./config/passport')(passport);
//Morgan middle ware
apps.use(morgan('dev'));
/* User request first come through here. So for the user path it goes like /users/abc */
apps.use('/users', users); 
apps.use('/products',Products);
apps.listen(8081); 

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');