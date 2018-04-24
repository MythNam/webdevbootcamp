process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose');
var express = require("./config/express");

var db = mongoose();
var app = express();

// User.create({
//     firstName: "Son", 
//     lastName: "Dang",
//     email: "son@example.com",
//     username: "username",
//     password: "password"
// }, function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log("NEWLY CREATED USER...");
//         console.log(user);
//     }
// });

app.listen( process.env.PORT, process.env.IP, function() {
    console.log("Server started to listen to PORT 3000!");
});

module.exports = app;
console.log('Server running at http://localhost:3000/');