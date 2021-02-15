/*
## Exercise 2
Create a button
When the button is clicked, call the StarWars api for the first person. \
Print the person name in an **h1** tag. \
Print the person stats in a **table**:
* Height
* Weight
* Eye color
* Hair color

**URL:** https://swapi.dev/api/people/1 \
**NOTE:** JQuery will autmatically parse this call (js will not). */

let resultH1 = document.getElementById('resultH1tag')
let ulTag = document.getElementById('list');
let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    const urlForDataFetch = "https://swapi.dev/api/people/1";

    fetch(urlForDataFetch)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            resultH1.innerHTML += `The person name is: ${data.name}`
            ulTag.innerHTML += `<li>${data.height}cm</li>`
            ulTag.innerHTML += `<li>${data.mass}kg</li>`
            ulTag.innerHTML += `<li>${data.eye_color}</li>`
            ulTag.innerHTML += `<li>${data.hair_color}</li>`
        })
        .catch(function(error){
            console.log(error);
        })
})