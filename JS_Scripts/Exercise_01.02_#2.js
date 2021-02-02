/*Make a simple login application
Declare an array named users, that will hold usernames and serve you as a fake database
Declare another array that will keep the passwords
Declare two fields one for username and one for password, and one login button
On login button click if the username and the password from the input field match the combination: users[i], passwords[j] print in <h2> tag “Hello username” else print “Wrong username”
*/

let users = ["goran", "zoran", "admin", "test"];
let passwords = [123, "mleko", "admin", 789];

let userName = document.getElementById('inputUser');
let password = document.getElementById('inputPassword');

let loginBtn = document.getElementById('logBtn');


function checkUserAndPassword(user, password) {
    for(let element of user) {
        if(element === userName.value) {
            
        }
    }
}

loginBtn.addEventListener('click', function(){

})


