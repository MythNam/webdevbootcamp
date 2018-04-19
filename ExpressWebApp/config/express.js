var config = require('./config'), 
express = require('express'), 
morgan = require('morgan'), 
compress = require('compression'), 
bodyParser = require('body-parser'), 
methodOverride = require('method-override'),
session = require('express-session');
//Return an instance of express
module.exports = function() {
    var app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production'){
        app.use( morgan (compress()) );
    }
    // APP.USE
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));
    // Configure Express by Using App.set
    app.set("views", "./app/views");
    app.set("view engine", "ejs");
    
    require("../app/routes/index.server.routes.js") (app);
    //Configure Express to Use the public folder
    app.use(express.static("./public"));
    
    return app;
};