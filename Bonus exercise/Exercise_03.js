/* Task 3
Write a JavaScript program that will serve as a bingo application.
Make an array of numbers from 1 till 37 that you will display it in a <ol> tag
Make another array that will have only 5 numbers and it will serve you as a winning combination
There should be 5 input fields for inserting numbers and a button for submitting the bingo combination
You should get the values from the input fields and check if all of the inserted numbers are equal to the winning combination and display it in a h1 tag winning message “You won 1000000$! Congrats!”
Else print “More luck next time!” */

let arrayNumbers =[];
let list = document.getElementById('numbersList');
//making the list and the array of numbers
function bingoNumbers (){
    for(let i = 1; i <=37; i++) {
        list.innerHTML += `<li>${i}</li><br/>`;
        arrayNumbers.push(i);
    }
}
bingoNumbers();
// making a random winning combo and storing it in an array
let winningNumbers = [];
function winCombo(){
    for(let i = 1; i<= 5; i++)
    winningNumbers.push(Math.floor((Math.random() * 37) + 1));
    console.log(winningNumbers);
}
winCombo();
//getting the input from the user and storing it in an array
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let num4 = document.getElementById('num4');
let num5 = document.getElementById('num5');



let userNumbers = []

let button = document.getElementById('btn');
let result = document.getElementById('result');

button.addEventListener('click', function(){
    // debugger
    let number1 = Number(num1.value);
    let number2 = Number(num2.value);
    let number3 = Number(num3.value);
    let number4 = Number(num4.value);
    let number5 = Number(num5.value);

    if (!number1 || !number2 || !number3 || !number4 || !number5) {
        showMsg('wrong input', result);
        clearInput();
        return;
    } 

    if(winningNumbers.includes(number1) && winningNumbers.includes(number2) && winningNumbers.includes(number3) && winningNumbers.includes(number4) && winningNumbers.includes(number5)) {      
        clearInput();
        showMsg(`Congratulations, YOU WON 100 000$, the winning numbers are ${winningNumbers}`, result); 
        return;
    }
    else {
        showMsg(`Sorry, Better luck next time. the winning numbers were ${winningNumbers}`, result);
        clearInput();
    }
})
function showMsg(message, element){
    element.innerHTML = "";
    element.innerHTML = `<h1>${message}</h1>`
}
function clearInput() {
    //fala na trajan za ova.
    num1.value = "";
    num2.value = "";
    num3.value = "";
    num4.value = "";
    num5.value = "";
}