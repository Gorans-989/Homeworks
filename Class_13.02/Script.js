//filis podocna da pokazes i eden primer za  povtoruvacki funkcii moze?
// function practice(){
//     console.log('hello world');
// }

// let result1 = practice();
// console.log(result1);

// function sumNumber(num1, num2){
//     num1 = 1;
//     num2 = 2;
//     return num1 + num2;
// }

// let sum = sumNumber();
// console.log(sum)

/*Make 3 functions:
1. Function that takes a number through a parameter and returns how many digits that number has
2. Function that takes a number through a parameter and returns if its even or odd
3. Function that takes a number through a parameter and returns if its positive or negative
Create a function that takes a number through a parameter and calls all three functions for the number that was passed. 
It should show the results in the console. */

// function lengthOfNumber(number){
//     //ova ne mi e jasno.
//     //neznam kako da napravam loop za da gi ispishe site cifri od brojot
//     array = [];
//     let counter = 0;
//     while(number % 10 !==0 && counter < 5){
//         result = parseInt(number % 10);
//         array.push(result);
//         counter ++;
//     }
//     return array.length;
// }
// function oddOrEven (number){
//     if(number % 2 === 0) {
//         return `even number`
//     }
//     else{
//         if(number % 2 !== 0){
//             return `odd number`
//         }
//     }
// }
// function positiveOrNegative (number){
//     if(number < 0) {
//         return `negative number`;
//     }
//     else if(number > 0) {
//         return `positive Number`;
//     }
//     else if(number === 0) {
//         return `the number is zero`;
//     }
// }
// function callAll3Functions (number){
//     console.log(lengthOfNumber(number));
//     console.log(oddOrEven(number));
//     console.log(positiveOrNegative(number));
// }
// callAll3Functions(-612257)

/*
1. First arrow function will accept two parameters, one for element and one for color. 
The function should change the given element text color with the color given from the 
second color parameter. 
If no parameter is passed for color, the default value is **black**.
2. Second arrow function will accept two parameters, one for element and one for textSize. 
The function should change the given element text size to the number given from the second
 textSize parameter. 
If no parameter is passed for textSize, the default value is 24.
Create an HTML document with two inputs, a button and an h1 header with some text. 
The first input should be for text size and the second for color.
When the button is clicked the h1 header should change according to the input values 
( change size as the first input value and color as the second input value ).
Use the functions that we declared earlier and use arrow function for the event 
listener of the button. */

let inputText = document.getElementById('textSize');
let colorInput = document.getElementById('color')
let result = document.getElementById('result')
let button = document.getElementById('btn');

//
let firstFunction = (element, color) => {
    if(color) {
        element.style.color = color;
    }
    else{
        element.style.color = 'black';
    }
}
let secondFunction = (element, textSize) => {
    if(textSize) {
        element.style.fontSize = `${textSize}px`;
    }
    else{
        element.style.fontSize = '24px';
    }
}
button.addEventListener('click', () => {
    let textSize = parseInt(inputText.value);
    firstFunction(result, colorInput.value);
    secondFunction(result, textSize);
    inputText.value = "";
    colorInput.value = "";
});