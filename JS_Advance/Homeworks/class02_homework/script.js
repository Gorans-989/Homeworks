/* # Exercises
## Title Generator
* Create 3 inputs:
  * Color
  * FontSize
  * Text
* Create a button for generating titles
* When the button is clicked generate a new h1 element with the color, font size and text from the inputs
*/
let color1 = document.getElementById('color1');
let fontSize1 = document.getElementById('font-size1');
let text1 = document.getElementById('text1');
let result1 = document.getElementById('result1');
let button1 = document.getElementById('btn1');

button1.addEventListener('click', function(){
  result1.innerHTML = "";
  result1.innerHTML += `
    <h1 style="color:${color1.value};font-size:${fontSize1.value}px;">
    ${text1.value}</h1>`
    clearInput(color1, fontSize1, text1);
})

//function for cleaning inputs . I can reuse this.
function clearInput(input1, input2, input3){
  input1.value = "";
  input2.value = "";
  input3.value = "";
}
// end of first task

/* ## List Generator
* Create 3 inputs:
  * Color
  * FontSize
  * Items
* Create a button for generating unordered lists
* When the button is clicked generate a new ul element with the color, font size and items from the inputs 
> Items should be added separated by , in the input */

let color2 = document.getElementById('color2');
let fontSize2 = document.getElementById('font-size2');
let text2 = document.getElementById('text2');
let result2 = document.getElementById('result2');
let button2 = document.getElementById('btn2');

// spliting the item input string into an array
function arrayItems(input){
  return array = input.split(",");
}

//printing every item in new list
let listConstructor = function(array, element, color, fontSize){
  for(let item of array){
    element.innerHTML += `<li style="color:${color};font-size:${fontSize}px">${item}</li>`
  }
}
button2.addEventListener('click', () => {
  let i = 0;
  let items = arrayItems(text2.value);
  result2.innerHTML += `<ul id="list${i}"></ul><hr/>`
  listElement = document.getElementById(`list${i}`);
  listConstructor(items, listElement, color2.value, fontSize2.value);
  clearInput(color2, fontSize2, text2);
  i++;
})

/*
1. Kako da napravam dinamicno id
2. Idejata e sledna : so sekoj klik na kopceto da se kreira <ul> so novo id i potoa da se vrzam na toa id i da dodavam novi <li> items. Dali ova se barashe vo zadacata?
Mislam deka mi e gresen pristapot
*/