module.exports = function(app) {
    var index = require("../controllers/index.server.controller.js");
    app.get("/", index.render());
};

//app.route("/").get( function(){ res.send("This is a GET request"); 
//}).post( function() { res.send("This is a POST request"); });