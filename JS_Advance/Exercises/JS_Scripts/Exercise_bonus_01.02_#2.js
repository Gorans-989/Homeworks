/*Make a simple login application
Declare an array named users, that will hold usernames and serve you as a fake database
Declare another array that will keep the passwords
Declare two fields one for username and one for password, and one login button
On login button click if the username and the password from the input field match the combination: users[i], passwords[j] print in <h2> tag “Hello username” else print “Wrong username”
*/



let users = ["goran", "zoran", "admin", "test"];
let passwords = [123, "mleko", "admin", 789];

let result = document.getElementById('resultTag');
let userName = document.getElementById('inputUser');
let password = document.getElementById('inputPassword');

let loginBtn = document.getElementById('logBtn');


function checkUser(user,password, array1, array2){
    for(let i = 0; i < array1.length; i++){
        if(user === array1[i] ) {
           if(password === array2[i]) {
               result.innerHTML = "";
               result.innerHTML = `Hello user: ${array1[i]}`;  
            }
            else{
                result.innerHTML = "";
                result.innerHTML = `Incorect password!`
                break;
            }
        }
        else {
            result.innerHTML = "";
            result.innerHTML = `Wrong input, the user: ${user} does not exist`
        }
    }
}

loginBtn.addEventListener('click',function(){
    checkUser(userName.value, password.value, users, passwords);
    userName.value = "";
    password.value = "";
})