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
let longestRecipeBtn = document.getElementById('btnLongest');
let shortestRecipeBtn = document.getElementById('btnShortest');
let showAllBtn = document.getAnimations('btnAll');
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
function createRecipeArray(name, ingredients, time){
    // let name = nameinput.value;
    // let ingredient = ingredientInput.value;
    // let time = parseInt(timeInput.value);
    // se obidov vaka no mi javuvashe deka se vekje deklarirani. ne zabelezav kade
    //potoa se obidov da gi deklariram podolu i mi uspea.
    recipies.push(new ObjectRecipe(name, ingredients, time));
}
//sekoj pat koga ja povikuvam funkcijata print zapocnuva da go vrti arrayot od pocetok i gi printa site objekti (znaci se dupliraat vekje isprintanite). Sto ako go ispraznam arrayot na krajot na sekoe vrtenje? mi uspea na 93 linija. Dali e podobro da go dodadam vo funkcijata clear form?


//creating a function for printing objects from array in table
function printingRecipe(array, element) {
        element.innerHTML = "";// i clean the html every time i click the button because i dont want to repeat the same array item every time
    for(let i =  0; i < array.length; i++) {
        element.innerHTML += `
            <tr id = "recipeNumber${i + 1}">
                <td>
                    ${i + 1}   
                </td>
                <td>
                    ${array[i].name}   
                </td>
                <td>
                    ${array[i].ingredients}    
                </td>
                <td>
                    ${array[i].time}   
                </td>
                    
                <td>
                    <button id="btnDelete${i + 1}"> Delete </button>
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
    let ingredients = ingredientInput.value;
    let time = parseInt(timeInput.value);
    //1.check for empty input
    if(!name && !ingredients && !time){
        alert(`not a valid input`);
        return;
    }
    else {
        //2.call function for creating object and pushing the object in array
        createRecipeArray(name, ingredients, time);
        //3.call function for printing in table
        printingRecipe(recipies, table);
        //4.i need to clear the inputs. make a function
        clearForm();
        //5. the delete button is tricky. i defined it inside the function thus its local. i need to make it global.
        //what if i put all the next code here? 
        //how to delete the coresponding row?
        $(document).ready(function(){
            let i = 1;
            $(`#btnDelete${i + 1}`).click(function(){
                $(`#recipeNumber${i + 1}`).remove();
            });
            i++;

            // $('#btnLongest').click(function(){
                
            // })

            // $('#btnShortest')
            // $('#btnAll')



        })

        //6. the last part is hard. the buttons need to react with the table. I can read the time from the array of recipies but how to connect it with the corresponding table row. 
        // maybe i can overwrite the whole table. 
        // i need to use .hide  and .show
    }
})
function longestTimeRecipe(array){
    let result = 0;
    for(let item of array) {
        if(item > result) {
            result = item
        }
    }
}
function shortestTimeRecipe(array){
    let result = Infinity;
    console.log(result);
    for(let item of array){
        if(item < result) {
            result = item;
        }
    }
}
// longestRecipeBtn.addEventListener('click', function(){
//     table.innerHTML.hide();

// })
// shortestRecipeBtn
// showAllBtn