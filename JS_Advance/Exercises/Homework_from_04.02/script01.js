let divResutl = document.getElementById("result");

let string1 = "Hi, do you know your abc's? The latest airplane designs evolved from slabcraft."

let regExp = new RegExp( /abc/);

let string2 = regExp.exec(string1);

console.log(string2);

var myRe = new RegExp('d(b+)d');
var myArray = myRe.exec('cdbbdbsbz');
console.log(myArray);

// 0: "dbbd"
// 1: "bb"
// groups: und

var re = /\w+\s/g;

let re1 = new RegExp('/\\w+\\s/', 'g');


var str = 'fee fi fo fum';
var myArray1 = re1.exec(str);   
console.log(myArray1);