var express = require("./config/express");

var app = express();

app.listen( process.env.PORT, process.env.IP, function() {
    console.log("Server started to listen to PORT 3000!");
});