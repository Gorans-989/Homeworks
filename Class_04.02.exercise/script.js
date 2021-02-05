function Persons (fname, lname, age){
    this.firstName = fname,
    this.lastName = lname,
    this.age = age,
    
    this.info = function() {
        return `Name: ${this.firstName} ${this.lastName} Age: ${this.age}`;
    }
}



let personsArray = [];

let saveButton = document.getElementById('saveBtn');
let result = document.getElementById('result');


let firstNameInput = document.getElementById('firstName');
let lastNameInput = document.getElementById('lastName');
let ageInput = document.getElementById('age');
let msg = document.getElementById('msg');

saveButton.addEventListener('click', function(){
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let age = ageInput.value;

    if (!firstName || !lastName || !age) {
        // do something
        showMsg("please enter valid input", msg);
        return;
    }
    else {
        personsArray.push(person = new Persons(firstName, lastName, age));
        printPersons(personsArray, result);
        clearForm();
        showMsg("succesfully added person", msg);
    }
})

function printPersons(persons, element) {
    element.innerHTML = '';
    
    let html = "";
    for (let i = 0; i < persons.length; i++) {
        html += `<li>ID: ${i + 1} ${persons[i].info()}</li>`
    }
    element.innerHTML = html;
}

function clearForm() {
    firstNameInput.value = "";
    lastNameInput.value = "";
    ageInput.value = "";
}

function showMsg (message, element) {
    element.innerHTML = "";
    element.innerHTML = `<p>${message}</p>`
}