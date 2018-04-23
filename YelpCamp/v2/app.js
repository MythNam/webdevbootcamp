var express     = require("express"), 
    app         = express(), 
    bodyParser  = require("body-parser"), 
    mongoose    = require("mongoose");
    
mongoose.connect("mongodb://localhost/yelp_camp");

// var campgrounds = [
//         {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/04/09/23/10/girl-1319115__340.jpg"},
//         {name: "Mountain Goat's Rest", image: "https://image.shutterstock.com/display_pic_with_logo/2117717/443840548/stock-photo-camp-forest-adventure-travel-remote-relax-concept-443840548.jpg"},
//         {name: "Salmon Dome", image: "https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522__340.jpg"}
// ];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

//SCHEMA SETUP
var campgroundSchema = mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name: "Mountain Goat's Rest", 
//     image: "https://image.shutterstock.com/display_pic_with_logo/2117717/443840548/stock-photo-camp-forest-adventure-travel-remote-relax-concept-443840548.jpg",
//     description: "A mountain path for goat"
// }, function(err, campground){
//     if(err){
//         console.log(err);
//     } else {
//         console.log("NEWLY CREATED CAMPGROUND...");
//         console.log(campground);
//     }
// });

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    // Get all campgrounds from the database
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    });
});
//CREATE - add a new campground to the database
app.post("/campgrounds", function(req, res){
    //get data from form and add to the campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    //Creat a new campground and save to the database
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log("err");
        } else {
            res.redirect("/campgrounds");
        }
    });
    //redirect back to the campgrounds page
});
//NEW -Show form to add new campground
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});
//SHOW - Show more information about one campground
app.get("/campgrounds/:id", function(req, res){
    //find the campground with the provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err) {
            console.log(err);
        } else {
            //render show template with that campground
            res.render("show.ejs", {campground: foundCampground});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server Has Started");
});