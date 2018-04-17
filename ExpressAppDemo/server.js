process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require("./config/express");
var app = express();

app.listen( process.env.PORT, process.env.IP, function() {
    console.log("Server started to listen to PORT 3000!");
});

module.exports = app;
console.log('Server running at http://localhost:3000/');