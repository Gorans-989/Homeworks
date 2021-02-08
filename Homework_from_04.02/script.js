/* # Exercises 
## Student constructor function
* Create a constructor function for Student objects with:
  * Properties:
    * firstName
    * lastName
    * birthYear
    * academy 
    * grades - array of numbers
  * Methods:
    * getAge() - returns age of student
    * getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
    * getGradesAverage() - returns the average of the student grades
* Create an array with 3 students
## Student signup
* Create a form with first name, last name, birth year and academy
* Create a button for signing up
* The button should create a new Student object and add it in the array of students */

//defining the inputs. declaring variables
let firstName = document.getElementById('fname');
let lastName = document.getElementById('lastName');
let birthYear = document.getElementById('birthYear');
let academy = document.getElementById('academy');
let signUpButton = document.getElementById('signUpBtn');
let resultList = document.getElementById('list');

//object constructor for student info database
function StudentObject(firstName, lastName, birthYear, academy, grades){
    this.firstName = firstName,
    this.lastName = lastName,
    this.birthYear = birthYear,
    this.academy = academy,
    this.grades = [grades],//is this a valid declaration of an array? what is the point. how to create an array of number from one input
//i converted the input from birth year into a number but the function returns NaN. i need to parse it into a date.
    this.getAge = function(){
        let todayYear = new Date();
        return todayYear.getFullYear - this.birthYear;
    },

    this.getInfo = function() {
        return `This is student ${this.firstName} ${lastName} from the academy of ${this.academy}!`;
    },

    this.getGradesAverage = function(){
        for(let item of this.grades) {
            result += item
        }
        return result / this.grades.length;
    }
}
//creating an array of student objects
let studentsArray = [];
function printStudentInfo (array, element){
    element.innerHTML = "";
    for (let i = 0; i < array.length ; i++){
        element.innerHTML += `<li>id:${i + 1} ${studentsArray[i].getInfo()}</li>`;
    }
}

//function for clearing the input forms
function clearForm(){
    firstName.value = "";
    lastName.value = "";
    birthYear.value = "";
    academy.value = "";
}

//addevent listener for the button - executing the code
signUpButton.addEventListener('click', function(){
    //check if the input is empty
    if(!firstName.value || !lastName.value || !birthYear.value || !academy.value){
        alert(`empty input. Please fill out all fields`)
        return;
    }
    else {
        studentsArray.push(new StudentObject(firstName.value, lastName.value, parseInt(birthYear.value), academy.value))
        printStudentInfo(studentsArray, resultList);
        clearForm();
    }
})