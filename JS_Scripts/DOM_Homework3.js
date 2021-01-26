let recipeName = prompt("Type in the recipe name");
let numberOfIngridients = parseInt(prompt("Type in the number of ingridients to use"));

let bodyElements = document.querySelector('body');
console.log(bodyElements);
bodyElements.innerHTML += `<h1>${recipeName}</h1>`;
bodyElements.innerHTML += '<div><ul id="ingredientList"></ul></div>';
let list = document.getElementById('ingredientList');
console.log(list);



let i = 1;
while (i <= numberOfIngridients) {
    let ingredient = prompt(`Please type ingredient number${i}`)
    list.innerHTML += `<li>${ingredient}</li>`;
    i++;
}
