var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
        {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/04/09/23/10/girl-1319115__340.jpg"},
        {name: "Mountain Goat's Rest", image: "https://image.shutterstock.com/display_pic_with_logo/2117717/443840548/stock-photo-camp-forest-adventure-travel-remote-relax-concept-443840548.jpg"},
        {name: "Salmon Dome", image: "https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522__340.jpg"}
];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data from form and add to the campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect back to the campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server Has Started");
});