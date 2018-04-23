var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

Cat.create({
    name: "Snow White",
    age: 11,
    temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});
// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat){
//     if(err) {
//         console.log("Something has went wrong!");
//     } else {
//         console.log("We just saved a new cat to the db: ");
//         console.log(cat);
//     }
// });

Cat.find({}, function(err, cats){
    if(err) {
        console.log("Oh No, error!");
        console.log(err);
    }
    else {
        console.log("All the cats ...");
        console.log(cats);
    }
});