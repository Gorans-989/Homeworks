var numArray = [1, 35, 452, 23, 0, 8, 12, 75, 16];

let body = document.querySelector('body');
body.innerHTML += `<div><ul id="unList"></ul></div>`;
body.innerHTML += `<div id="secondDiv"></div>`;
var resultDiv = document.getElementById('secondDiv');
let list = document.getElementById('unList');

function sumAllNumbers(array) {
    let result = 0;
    let i = 0;
    while (i<array.length) {
        result += array[i];
        list.innerHTML += `<li>${array[i]}</li>`;
        resultDiv.innerText = `The sum result is:${result}`;
        i++;
    }
}

sumAllNumbers(numArray);