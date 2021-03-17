// Make a simple calculator application
// It should have two input fields of type number and five buttons
// Every button should perform the different calculation: SUM, DIFFERENCE, MULTIPLICATION, DIVISION, SQUARE
// You should create a function for each of them and to call it on the appropriate button click
// After clicking the button the result should be display the result in an appropriate <p> tag.
let number1 = document.getElementById('num1'); // da ne zaboravam value da povikam
let number2 = document.getElementById('num2');// value !!!


let sumBtn = document.getElementById('sumBtn');
let difBtn = document.getElementById('difBtn');
let multiplyBtn = document.getElementById('multiplyBtn');
let divisionBtn = document.getElementById('divisionBtn');
let squareBtn = document.getElementById('squareBtn');

let resultParagraph = document.getElementById('result');

function sum(x, y) {
    return result = x + y;
};
function difference(x, y) {
    return result = x - y;
};
function multiply(x, y) {
    return result = x * y;
};
function division(x, y) {
    return result = x / y;
};
function square(x, y) {
    return result = Math.pow(x, y);
};

sumBtn.addEventListener('click', function () {
    resultParagraph.innerText = sum(Number(number1.value), Number(number2.value));
    number1.value = "";
    number2.value = "";
});
difBtn.addEventListener('click', function(){
    resultParagraph.innerText = difference(Number(number1.value), Number(number2.value));
    number1.value = "";
    number2.value = "";
});
multiplyBtn.addEventListener('click', function(){
    resultParagraph.innerText = multiply(Number(number1.value), Number(number2.value));
    number1.value = "";
    number2.value = "";
});
divisionBtn.addEventListener('click', function(){
    resultParagraph.innerText = division(Number(number1.value), Number(number2.value));
    number1.value = "";
    number2.value = "";
});
squareBtn.addEventListener('click', function(){
    resultParagraph.innerText = square(Number(number1.value), Number(number2.value));
    number1.value = "";
    number2.value = "";
});