// 1.Create input form which will contain info about book(Name,Author,Telephone,Date). After clicking on the add button the book will be inserted into unordered list.

$(document).ready(function(){

// let bookName = $('#name').val();
// let author = $('#author').val();
// let telephone = $('#telNumber').val();
// let dateInput = $('#date').val();
 
// Vo jquery dokolku e definirana promenlivata nadvor od funcijata koja ja povikuvam nema da ja prevzeme vrednosta.

$('#addBtn').click(function(){
    let bookName = $('#name').val();
    let author = $('#author').val();
    let telephone = $('#telNumber').val();
    let dateInput = $('#date').val();
    $('#resultList').append(
        `
        <li>${bookName}</li>
        <li>${author}</li>
        <li>${telephone}</li>
        <li>${dateInput}</li>
        `
        );
    
    $('#name').val("");
    $('#author').val("");
    $('#telNumber').val("");
    $('#date').val("");
})
})