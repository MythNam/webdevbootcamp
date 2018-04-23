var bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    express = require("express"),
    app = express();
    
//APP CONFIG   
mongoose.connect("mongodb://localhost/blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
//MONGOOSE MODEL CONFIG
var blogSchema = mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {
        type: Date, 
        default: Date.now
    }
});
var Blog = mongoose.model("Blog", blogSchema);
//RESTFUL ROUTES
// Blog.create({
//     title: "Von Neumann Architecture",
//     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Von_Neumann_Architecture.svg/220px-Von_Neumann_Architecture.svg.png",
//     body: "The von Neumann architecture, which is also known as the von Neumann model and Princeton architecture, is a computer architecture based on the 1945 description by the mathematician and physicist John von Neumann and others in the First Draft of a Report on the EDVAC"
// });
app.get("/", function(req, res){
    res.redirect("/blogs");
});

app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if (err) {
            console.log(err);
        } else {
            console.log(blogs);
            res.render("index", {blogs: blogs});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING!");
});