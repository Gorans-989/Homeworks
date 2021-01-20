// EXTRA WINTER HOMEWORK

// * Note: Link this script to your html document and enter your solutions here.
// ** Note: Take all parameters from user input using prompt


// ----------- Task 01 --------------
// Write a JS function that will decide if a number entered by user is even or odd
// Example: isOddOrEven(3)
// Output 'Number 3 is odd number.'
let input = Number(prompt(`Please type in a number to check if it is an "even" or "odd"`));

function OddOrEvenNum (number) {
    if (typeof (number) === "number" && !isNaN(number)) {
        if (number % 2 === 0) {
            result = console.log(`The number ${number} is an "even" number.`);
        }
        else {
            result = console.log(`The number ${number} is and "odd" number.`)
        }
    }
    else {
        console.log("WRONG INPUT. Please type in ONLY NUMBER");
    }
}
let oddEvenResult = OddOrEvenNum(input);

// ------------ Task 02 --------------
// Write a function that takes an integer minutes and converts it to seconds.
// Example: convert(5)
// output 300

let inputMinutes = parseInt(prompt("please type number to convert to seconds"))
function minutesToSeconds(number) {
    if (typeof(number) === "number" && !isNaN(number)) {
        result = number * 60;
        console.log(result);
    }
    else {
        console.log("WRONG INPUT! Please type only numbers!");
    }
}
let convert = minutesToSeconds(inputMinutes);

// ------------ Task 03 -------------
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
// Example: points(38, 8) 
// output 100
let twoPointInput = Number(prompt("Type the number of 2-point baskets scored"));
let threePointInput = Number(prompt("Type the number of 3-point baskets scores"));

function calculateBasketballPoint (twoPoints, threePoints){
    if (typeof(twoPoints, threePoints) === "number" && !isNaN(twoPoints, threePoints)) {
        result = (twoPoints * 2) + (threePoints * 3);
        console.log(`The team has scored total of ${result}`);    
    }
    else {
        console.log("WRONG INPUT! Please type only numbers!");
    }
}
let teamPoints = calculateBasketballPoint(twoPointInput, threePointInput)





// ------------ Task 04 ------------ 
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// Example: howManyLegs(5, 2, 8)
// output: 50



let chickens = parseInt(prompt("How many chickens do you have"));
let cows = parseInt(prompt("How many cows do you have"));
let pigs = parseInt(prompt('How many pig do you have'));

let sumOfLegs = (chickens * 2) + (cows * 4) + (pigs * 4);
console.log(sumOfLegs);
/*let inputAnimal = prompt("Write chicken, cow or pig");
if (inputAnimal === "chicken") {
    numOfChicken = parseInt(prompt("How many chickens do you have"));
    if (typeof(numOfChicken) === 'number' && !isNaN) {
        chickens = numOfChicken * 2;
        return chickens;
    }
}
if (inputAnimal === 'cow') {
    numOfCow = parseInt(prompt("How many cows do you have"));
    if (typeof(numOfCow) === 'number' && !isNaN) {
        cows = numOfCow * 4;
        return cows;
    }
}
if (inputAnimal === 'pig') {
    numOfPig = parseInt(prompt('How many pig do you have'));
    if (typeof(numOfPig) === numOfPig && !isNaN) {
        pigs = numOfPig * 4;
        return pigs;
    }
}
let sumOfLegs = chickens + cows + pigs;
console.log (sumOfLegs);   
*/

// ------------ Task 05 ------------
// Some basic arithmetic operators are +, -, *, /, and %. In this challenge you will be given three parameters, num1, num2, and an operator. Use the operator on number 1 and 2.
// Example: calculate(3, 7, '*')
// output: 21


// ------------- Task 06 -----------
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// Example: comp("ABC", "DE")
// output false


// ------------- Task 07 -----------
//A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break. So you need two parameters, one for user age and other for the bartender being on break or not.
// Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
// Example: shouldServeDrinks(17, true) output false
// Example: shouldServeDrinks(19, false) output true
// Example: shouldServeDrinks(30, true) output false


// ------------- Task 08 -----------
// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
// Example: moodToday("happy") output "Today, I am feeling happy"
// Example: moodToday() output "Today, I am feeling neutral"


// ------------ Task 09 -----------
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.

//The function will be in this form: equalSlices(total slices, no. recipients, slices each)
// Example: equalSlices(11, 5, 2) output true (5 people x 2 slices each = 10 slices < 11 slices)
// Example: equalSlices(11, 5, 3) output false (5 people x 3 slices each = 15 slices > 11 slices)


// ---------- Task 10 ----------
// For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups I would get.

// Example: totalCups(6) output 7
// Example: totalCups(12) output 14
// Example: totalCups(213) output 248
