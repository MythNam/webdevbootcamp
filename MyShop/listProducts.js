var faker = require("faker");

//console.log(faker.fake("{{commerce.productName}}: {{commerce.price}}"));
console.log("=========================================");
console.log("Welcome to my SHOP!");
console.log("=========================================");
for (var i = 0; i < 10; i++) {
    console.log(faker.fake("{{commerce.productName}}: {{commerce.price}}"));
}
