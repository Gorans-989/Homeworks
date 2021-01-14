// Homework1
function checkingType (a) {
    let result=typeof a;
    return result;
}
console.log(checkingType("goran"))
console.log(checkingType(10))
console.log(checkingType(true))
console.log(checkingType())
console.log(checkingType(null))

// Homework2
let userInput = prompt ("How old is your dog?");
let age = Number (userInput)

function calculateDogYears () {
    let result = userInput * 7;
    return result;
}
console.log (calculateDogYears(userInput))
// Sakav da go ispecati rezultatot vo bodito
document.write (calculateDogYears(userInput))

// Homework3
let accountBalance = 1000;
let input = prompt ("How much money do yo want to withdraw");
let inputAmount = Number (input);

function withdrawal () {
    if (inputAmount <= accountBalance) {
        let result1 = accountBalance - inputAmount;
        console.log ("Amount of money withdrawn", inputAmount, "Amount of money left on account", result1 )
        // console.log ("Amount of money left on account", result1)
    }
    else {
        console.log("Not enough money");
    }   
}
withdrawal (inputAmount)