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
// Proverka dali liceto e polnoletno ili maloletno
if (todayYear - inputYear <18) {
    console.log ("Maloleten");
}
else if (todayYear-inputYear > 18 ) {
    console.log ("Polnoleten")
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
    console.log ("Maloleten")
}

// Proverka dali na liceto mu e rodenden i dali e polnoletno ili ne
// if (inputDay == todayDay && inputMonth == todayMonth && todayYear - inputYear >= 18) {
//     console.log ("Srekjen rodenden - polnoleten")
// }
// else If (inputDay == todayDay && inputMonth == todayMonth && todayYear - inputYear < 18) {
//     console.log ("Srekjen rodenden - maloleten")
// }

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