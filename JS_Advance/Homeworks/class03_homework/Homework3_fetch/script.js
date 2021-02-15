/* # Exercises
## Exercise 1
Create a button
When the button is clicked, get the data from a given url with an AJAX call. \
Print the name of the academy in an **h1** tag. \
Print all student names in an **unordered list**. \
**URL:** https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json \
**NOTE:** You need to parse this data before using it.
*/

let resultDiv = document.getElementById('result');
let list = document.getElementById('ulTag');
let buttonFetchCall = document.getElementById('fetchCallBtn')

function printFromArray(array, element){
    for(let i = 0; i < array.length; i++) {
        element.innerHTML += `<li>${array[i]}</li>`
    }
}

buttonFetchCall.addEventListener('click', function(){
    const urlForFetchCall = "https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json";

    fetch(urlForFetchCall)
        .then(function(response){
            console.log(response)
    
            return response.json();
        })
        .then(function(data){
            // debugger
            //console.log(data);
            resultDiv.innerHTML += `<h1> The name od the academy is: ${data.academy}</h1>`;   
            printFromArray(data.students, list);         
        })
        .catch(function(error){
            console.log(error);
        })
})

 /*Response provides multiple promise-based methods to access the body in various formats:

    1.response.text() – read the response and return as text,
    2.response.json() – parse the response as JSON,
    3.response.formData() – return the response as FormData object (explained in the next chapter),
    4.response.blob() – return the response as Blob (binary data with type),
    5.response.arrayBuffer() – return the response as ArrayBuffer (low-level representation of binary data),
    additionally, 
    5.1.response.body is a ReadableStream object, it allows you to read the body chunk-by-chunk, we’ll see an example later.*/

    // Sto da pravime so datata koja ja sodrzi response-ot? Na ovoj nacin datata se vrakja kako json.