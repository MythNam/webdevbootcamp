//Node exercise 2
//Average grade
function average(arr) {
    var sum = 0;
    for ( var i = 0; i < arr.length; i++) {
        sum+=arr[i];
    }
    return Math.floor(sum/arr.length);
}

var score = [90, 98, 89, 100];
console.log(score);
var score2 = [70, 78, 89, 90];
console.log(score2);

average(score);
average(score2);