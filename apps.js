var http = require("http");
var Discounts = require("./db/Discounts");
var Products = require("./db/Products");

var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost/VirtualAssociateDB';
var db =  mongoose.connection;
mongoose.connect(mongoDB,function(err){
    if (err) throw err; //  Connect to MONGODB
    console.log('Successfully connected');
});
mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let  discount =  Discounts({
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
discount.save(function(err) {
    if (err) throw err;
    console.log('Discounts saved successfully!');
  });
  
  product.save(function(err) {
    if (err) throw err;
    console.log('Products saved successfully!');
  });
console.log(discount.name);
http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');