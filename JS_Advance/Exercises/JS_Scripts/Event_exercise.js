// Student exercise#1
let myButton = document.getElementById('helloButton');
function greet(){
	userName = prompt("type in your name");
	alert(`Hello ${userName}`);
}
myButton.addEventListener('click',greet, false);



// Student exercise#2
let newStyleParagraph = document.getElementById('paragraph');
let btnClick = document.getElementById('clickBtn');

function changeStyle(element) {
    element.style.color = 'red';
    element.style.backgroundColor = 'yellow';
    element.style.fontSize = '100px'
}
btnClick.addEventListener('click',function() {changeStyle(newStyleParagraph);});

// Student exercise#3
let submitButton = document.getElementById('submitBtn');

let inputFirstName = document.getElementById('firstName');
let inputLastName = document.getElementById('lastName');
let inputEmail = document.getElementById('email');
let inputPassword = document.getElementById('password');
let resultParagraph = document.getElementById('resultP');

function addValuesToString(input1, input2, input3, input4) {
	// debugger
	result = `${input1} ${input2} ${input3} ${input4}`;
	resultParagraph.innerText = result;
}

submitButton.addEventListener('click', function() {
	addValuesToString(inputFirstName.value, inputLastName.value, inputEmail.value, inputPassword.value);
});

// Homework
let userInput = document.getElementById('divInput').children;
let rowsInput = document.getElementById('rows');
let columnsInput = document.getElementById('columns');
let createTableBtn = document.getElementById('buttonTable');
let printTable = document.getElementById('tableBody');
 
function createTable(rows, columns) {
	let i = 1;

	// debugger
	while (i<=rows){
		printTable.innerHTML += `<tr>this is row:${i} and column:${i}</tr>`;
		i++;
	}
	return printTable
}
createTableBtn.addEventListener('click', function(){
	createTable(rowsInput.value, columnsInput.value)}, false);