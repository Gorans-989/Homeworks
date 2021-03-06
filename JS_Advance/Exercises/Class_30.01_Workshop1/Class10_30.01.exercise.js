
/*
1. Create a javascript function that will find all numbers divisable by 7 and 3 in a array from 1 to 100.
2. Create a Javascript ATM machine. 
The ATM should have the following functions:
- make desposit (this function should add money to the users balance)
- make withdrawal (this function should should withdraw money to the users balance)
- get the balance (this function should display the current balance of the user)
- exit (this function should close the window)
create interactive menu using alerts
*/

function findAllNumbersBetween() {
    var result1 = [];
    // debugger
    
    for (let i= 1; i<101 ; i++) {
        if (i % 3 === 0 && i % 7 === 0 ) {
            // result1 = i;
            result1.push(i);          
        }
        else {continue};
    }
    console.log(result1);
    return result1;
}
var newArray = findAllNumbersBetween();
console.log('final result', newArray);

// // var userFunction = prompt(`Please enter 
// // 1. Deposit
// // 2. Withdrawal
// // 3. Balance
// // 4. Exit`);

var balance = 1000;
atm();
function atm(){
    var userFunction = prompt(`Please enter 
    1. Deposit
    2. Withdrawal
    3. Balance
    4. Exit`);
if (userFunction === "Deposit") {
    var inputDeposit = Number(prompt("please enter the amount you want to deposit"));
    if (typeof(inputDeposit) === 'number' && !isNaN(inputDeposit)) {
        let deposit = inputDeposit;
        balance += deposit;
        console.log(`You deposited ${deposit}. Balance account = ${balance}`);      
    }
    else {console.log('please write only numbers')};
};
if (userFunction === 'Withdrawal') {
    var withdrawal = 0;
    var inputWithdrawal = Number(prompt("please enter the amount you want to withdrawal"));
    if (typeof(inputWithdrawal) === 'number' && !isNaN(inputWithdrawal)) {
        withdrawal = inputWithdrawal;
       if (withdrawal <= balance) {
           balance = balance - withdrawal;
           console.log(`you have witdrawn ${withdrawal}. Balance account = ${balance}`);
       }
       else if (withdrawal > balance) {
           console.log('you dont have enough money on your account');
       }         
    }
    else {'please write only numbers'};
};
if (userFunction === 'Balance') {
    console.log(`Your account balance is ${balance}`);
};
if (userFunction === 'Exit') {
    alert('Thank you for using our ATM');
    return;
}
else {atm()};
}

/* 
1. Write a simple register program that will take new user's username and password and save it. Display the usernames of all existing users in a list.
 - Users should be stored in array of User objects
 - Array need to have one admin user by default when the application is started
 - User need to have at least 3 properties: Username, Password and isAdmin
2. Write a simple login program that will require user's username and password to be entered. Display a message for the user that is logged in (ex. "Welcome Bob to our awesome app"). 
3. Add an option for logging out.
4. Add some further validation to all input fields for the usernames and passwords
 - The user has to enter both username and password
 - Register or login should not proceed with empty inputs
 - Username needs to include more than 3 characters
 - Password has to be longer than 6 characters
5. Add an admin panel that will check if the user is admin and display a message (ex. Welcome SuperAdmin). Display all usersnames and passwords in a list or table.
*/

/*
1. 2 froms for login and register, one button for logout and one div which will have all users
2. Declaration and initialization of global variables (arraysOfAllUsers, currentUser)
3. events for each button (login, register, logout) and function
4. create function constructor User
5. Register: get the inpit or radio button value and check if they are empty or password less than 6 characters or username is less than 3 characters. If statment is correct, creat the user like let newUser = new User(username, password, isAdmin); Once it is created add it to the array.
6. Login: check if the two input fields values are empty? if not, check if there is username in the arrayOfAllUsers and if the password for that user is same with the password in the input field value. Once it is found currentUser should be the user that is found.
7. Logout: if currentUser !== null, than currentUser = {}
8. check if currentUser is admin and if it is admin show all users from arrayOfAllUsers in the div
*/
/*autocomplete="on"
from Igor Tarchugovski to everyone:    12:12 PM
sega e top
from Igor Tarchugovski to everyone:    12:12 PM
nema warnings
from code academy1 to everyone:    12:15 PM
element.autocomplete = "on/off"
*/

function User(name, pass, isAdmin){
    this.username = name;
    this.password = pass;
    this.isAdmin = isAdmin;
}

let usersArray = [];  
usersArray.push(new User('Goran', '122', true));

var userName = document.getElementById('userName');
var userPassword = document.getElementById('password');
var regButton = document.getElementById('registerBtn');
let logButton = document.getElementById('loginBtn');
let result = document.getElementById('msg');
let logoutBtn = document.getElementById('logOutBtn');
let loggedUser = null;
let adminList = document.getElementById('list');
//console.log(userName, userPassword); - sekogas prazno bidejki ne e stisnato kopceto i ne e zemen inputot. 

//guard scenario . validacii.

function isValid(name, password) {
    //guard scenarija .
    if (name.length < 6 && password.length < 3) {
        return false;
    }
    return true;
}

// if(!loggedUser) {
//     return
// }
// happy case scenarios


regButton.addEventListener('click', function () {
    // if(!isValid(userName.value, userPassword.value))
    if (isValid(userName.value, userPassword.value) === false ) {
        alert('empty inputs');
        return     
    }

    // if (userName.value === "" && userPassword.value === "") {
    //     alert('Empty inputs');
    //     return
    // }
    usersArray.push(new User(userName.value, userPassword.value, false));
    console.log(usersArray);
    userName.value = ""; // so ova se brishe inputot. 
    userPassword.value = "";
}, false);



logButton.addEventListener('click', function(){
    for (let element of usersArray) {
        if (userName.value === element.username) {
            // check if user exists
            //check if password exist
            // write the msg that he is logged in
            // mora da imam break bidejki kje prodolzi da izvrshuva iako e zadovolen uslovot,  i posledniot else kje se izvrshi
            if (userPassword.value === element.password) {
                result.innerText = `Welcome ${element.username}!`
                loggedUser = element;
                if (loggedUser.isAdmin) {
                    for (let element of usersArray) {
                        adminList.innerHTML += `<li>User name:${element.username}. Password:${element.password}</li>`
                    }
                }
            }
            else {
                result.innerText = `Incorect password`
            }
            break
        }
        else {
            result.innerText = `the user ${userName.value} does not exist`
        }
    }
    userName.value = "";
    userPassword.value = "";
});

logoutBtn.addEventListener('click', function(){
    result.innerText = `${loggedUser.username} is logged out`
    userName.value = "";
    userPassword.value = "";
    loggedUser = null;
}, false);

console.log(userName.value, userPassword.value)

    // usersArray.push(userName, userPassword);