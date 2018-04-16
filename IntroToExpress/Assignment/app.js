var express = require("express");
var app = express();

app.get("/", function(req, res) {
   res.send("Hi There, welcome to my assignment!"); 
});

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        dog: "Woof Woof",
        cat: "Meow",
        cow: "Moo",
        goldfish: "..."
    };
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'");
    // if (animal === "pig"){
    //     res.send("The " + animal + " says 'Oink'");
    // }
    // else if (animal === "cow") {
    //     res.send("The " + animal + " says 'Moo'");
    // }
    // else if (animal === "dog") {
    //     res.send("The " + animal + " says 'Woof Woff'");
    // }
    // else {
    //     res.send("Please select an animal: pig, cow, dog");
    // }
});

app.get("/repeat/:word/:times", function(req, res){
    var words = req.params.word;
    var number = Number(req.params.times);
    var speak =;
    for (var i = 0; i < number; i++) {
        speak += (" " + words);
    }
    res.send(speak);
});

app.get("*", function(req, res){
    res.send("You are a star!!!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});