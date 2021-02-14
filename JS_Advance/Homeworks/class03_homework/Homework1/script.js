/* # Exercises
## Exercise 1
Create a button
When the button is clicked, get the data from a given url with an AJAX call. \
Print the name of the academy in an **h1** tag. \
Print all student names in an **unordered list**. \
**URL:** https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json \
**NOTE:** You need to parse this data before using it.
*/

let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
let button1 = document.getElementById('btn1');

button1.addEventListener('click',function(){
    let xmlRequest = new XMLHttpRequest();

    xmlRequest.onload = function(){
        if(xmlRequest.status >= 200 && xmlRequest.status <= 300) {
            console.log('the call is successfull');
            let result = JSON.parse(xmlRequest.response);
            console.log(result);
            result1.innerHTML += `<h1>The academy is:${result.academy}</h1>`;
            printFromArray(result.students, result2);
        }
        else {
            console.log(xmlRequest.responseText);
        }
    }
    xmlRequest.open("GET", "https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json");
    xmlRequest.send();
})

//function for printing from array
function printFromArray(array, element){
    for(let i = 0; i < array.length; i++) {
        element.innerHTML += `<li>${array[i]}</li>`
    }
}

//ajax call with jquery
$(document).ready(function() {

    $('#btn2').click(function(){

        const urlForData = "https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json";

        $.ajax({
            url: urlForData,
            success: function(result){
                console.log('the call is successfull');
            },//ja zaboraviv zapirkata i mi javi 'unexpected identifier'
            error:function(){
                console.error('An error occured');
            }
        })
        .done(function(data){
            let result = JSON.parse(data);
            $('#result1').append(`<h1>The academy is:${result.academy}</h1>`)
            printFromArray(result.students, result2);
        })
    })
})