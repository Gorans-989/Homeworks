/* Task 4
Write a JavaScript page that can save recipes in a table.
There should be inputs for:
Name
Ingredients ( strings )
TimeToMake
The recipes in the table should have a delete button that delets the table row
Below the table there should be 3 buttons
Show recipe that takes the longest time to make, show recipe that takes the shortest time to make and show all
The buttons should change the table to only show that recipe or show all recipes */

let nameInput = document.getElementById('name');
let ingredientInput = document.getElementById('ingredients');
let timeInput = document.getElementById('time');
let button = document.getElementById('btnAdd');
let table = document.getElementById('table');
let longestRecipe = document.getElementById('btnLongest');
let shortestRecipe = document.getElementById('btnShortest');
let showAll = document.getAnimations('btnAll');
let recipies = [];
//da napravam object od sekoj recept so 3 property name/ingredients[array]/time.
// potoa tie objekti da gi skladiram vo array za polesen pristap i precatenje

//kako da napravam array od ingredients. vo zadacata pisuva 'STRINGS' , megutoa kako da vodam kontrola sto vnesuva userot i kako da gi razdelam. mozam da iskoristam slice i " " i na toj nacin posle sekoe prazno mesto kje gi dvoi.



// object constructor
function ObjectRecipe(name, ingredients, time) {
    this.name = name,
    this.ingredients = ingredients,
    this.time = time
};
//creating an array of recipe objects
function createRecipeArray(name, ingredient, time){
    // let name = nameinput.value;
    // let ingredient = ingredientInput.value;
    // let time = parseInt(timeInput.value);
    // se obidov vaka no mi javuvashe deka se vekje deklarirani. ne zabelezav kade
    //potoa se obidov da gi deklariram podolu i mi uspea.
    recipies.push(new ObjectRecipe(name, ingredient, time));
}
//creating a function for printing objects from array in table
function printingRecipe(recipe, element) {
    for(let item of recipe) {
        element.innerHTML += `
            <tr>
                <td>
                    ${item.name}    
                </td>
                
                <td>
                    ${item.ingredients}
                </td>
                
                <td>
                    ${item.time}
                </td>

                <td>
                    <button id="btnDelete"> Delete </button>
                </td>
            </tr>
    
        `
    }
}
//function for clearing the input fields
function clearForm(){
    nameInput.value = "";
    ingredientInput.value = "";
    timeInput.value = "";
}
//finnaly the app
button.addEventListener('click', function(){
    let name = nameInput.value;
    let ingredient = ingredientInput.value;
    let time = parseInt(timeInput.value);
    //1.check for empty input
    if(!name && !ingredient && !time){
        alert(`not a valid input`);
        return;
    }
    //2.call function for creating object and pushing the object in array
    createRecipeArray(name, ingredient, time);
    //3.call function for printing in table
    printingRecipe(recipies, table);
    //4.i need to clear the inputs. make a function
    clearForm();
    //5. the delete button is tricky. i defined it inside the function thus its local. i need to make it global.
    //what if i put all the next code here? 
    //how to delete the coresponding row?
    let delBtn = document.getElementById('btnDelete');
    //6. the last part is hard. the buttons need to react with the table. I can read the time from the array of recipies but how to connect it with the corresponding table row. 
    // maybe i can overwrite the whole table. 
    // i need to use .hide  and .show    
})