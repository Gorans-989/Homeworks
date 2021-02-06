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


// da kreiram konstruktor koj kje skladira recept kako objekt so 3 property ime , sostojki i vreme za podgotovka
function ObjectRecipe(name, ingredients, time) {
    this.name = name,
    this.ingredients = ingredients,
    this.time = time
};

function createRecipeArray(name, ingredient, time){
    recipies.push(new ObjectRecipe(name.value, ingredient.value, parseInt(timeInput.value)));
}

button.addEventListener('click', function(){
    //1.check for empty input
    if(!nameInput.value && !ingredientInput.value && !timeInput){
        alert(`not a valid input`);
        return;
    }
    //2.call function for creating object and pushing the object in array
    createRecipeArray(nameInput, ingredientInput, timeInput);
    //3.call function for printing in table
    printingRecipe(recipies, table);
    //4.i need to clear the inputs. make a function
    clearForm();
    //5. the delete button is tricky. i defined it inside the function thus its local. i need to make it global.
    //what if i put all the next code here? 
    //how to delete the coresponding row?
    let delBtn = document.getElementById('btnDelete');
    //6. the last part is hard. the buttons need to react with the table. I can read the time from the array of recipies but how to connect it with the corresponding table row.     
})




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

function clearForm(){
    nameInput.value = "";
    ingredientInput.value = "";
    timeInput.value = "";
}

/*
sekoj recept da bide object so 3 property naziv / sostojki / vreme za podgotovka. 
potoa sekoj object da se pushne vo array za polesen pristap

problemot e vo brojot na sostojki. kako da definiram kolku sostojki kje ima eden recept ? 
sostojkite da bidat eden array vo objektot. da ne formiram povekje objecti so ist naziv a razlicni sostojki.

so klick na kopce add da se :
1. dodadat vo object
2. objectite ( recipes) da se dodadat vo array
3. 
*/