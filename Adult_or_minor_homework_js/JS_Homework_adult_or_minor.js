// var number = 10;

// if (number >20) {
//     console.log (true);
// }
// else {
//     console.log(false)
// }

// kako se koristi if funkcija
// if (number>20) {
//     console.log ("number is bigger then 20")
// }
// else if (number>13 && number < 18){
//     console.log("number is bigger than 13 and smaller then 18")
// }else {
//     console.log(true);
// }

// // Kako da barame od user da vnese input
// let userInput= prompt ("enter some number");
// let convertedToNumber= parseInt (userInput);
// console.log (convertedToNumber +10);

// let userInput= prompt ("How much money do you have in your wallet");
// let userMoney= parseInt(userInput);
// if (userMoney < 2000){
//     console.log ("Go to ATM");
// }
// else if (userMoney>2000){
//     console.log ("Go to dinner");
// }


let userInput = prompt("Enter you birthday mm/dd/yyyy");

var stringFormatedDate = userInput.match(/(\d\d)(\d\d)(\d\d\d\d)/);

let date = new Date(stringFormatedDate[3], stringFormatedDate[1] - 1, stringFormatedDate[2]);

let inputDay = date.getDate();
let inputMonth = date.getMonth() +1;
let inputYear = date.getFullYear();

let todayDate = new Date();


let todayDay = todayDate.getDate();
let todayMonth = todayDate.getMonth () +1;
let todayYear = todayDate.getFullYear();

if (todayYear - inputYear <=17) {
    console.log ("Maloleten");
}
else if (todayYear-inputYear > 18 ) {
    console.log ( "Polnoleten")
}
else if (todayYear - inputYear == 18 && inputMonth < todayMonth ) {
    console.log ("Polnoleten")
}
else if ( todayYear - inputYear == 18 && inputMonth > todayMonth ) {
    console.log ("Maloleten")
}
else if (todayYear - inputYear == 18 && inputMonth == todayMonth && inputDay <= todayDay ) {
    console.log ("Polnoleten")
}
else if (todayYear - inputYear == 18 && inputMonth == todayMonth && inputDay > todayDay) {
    console.log ("Maloleten =")
}


// Да се внесе бројка на роденден и да се провери дали е полнолетена особата?
// ?
// 1. Внесувам прво месец, па ден, па година (пример 01231996)
// 2. Замената на внесената бројката со формат на вредност разбирлива за датум се прави со: 
//     var todayDate = new Date();
//     var stringFormatedDate = НЕШТО.match(/(\d\d)(\d\d)(\d\d\d\d)/); //01 23 1996
//     var date = new Date(stringFormatedDate[3], stringFormatedDate[1] - 1, stringFormatedDate[2]);
// 3. За превземање на денот во месецот се користи НЕКОИ_СИ_ДАТУМ.getDate(), за месецот НЕКОИ_СИ_ДАТУМ.getMonth() + 1, за годината НЕКОИ_СИ_ДАТУМ.getFullYear()
// let todayDateDate = todayDate.getDate();
// let todayDateMonth = todayDate.getMonth() + 1;
// let todayDateFullYear = todayDate.getFullYear();
// 4. Доколку му/и е роденден испечатете порака "Srekjen rodenden" и во продолжение дали е полнолотен/а.