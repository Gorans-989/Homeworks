//Changing text in h1 in first Div
let headerFirstDiv = document.getElementById('myTitle');
headerFirstDiv.innerText = 'This text is entered by ME via script.';

//Changing text in paragraph in first Div
let paragraphByClassName = document.getElementsByClassName('paragraph');
console.log(paragraphByClassName);
paragraphByClassName[0].innerText = 'Paragraph text is entered via script';

//Changing text in paragraph in Second Div
let paragraphSecondDiv = document.getElementsByClassName('paragraph_second');
console.log(paragraphSecondDiv);
paragraphSecondDiv[0].innerText = 'I used JS to enter this text!';

//defining dvi 3 and changing text inside
let allDivs = document.querySelectorAll('div');
console.log(allDivs);
//if i used last child of body the result will be the script
let div3 = allDivs[2];
console.log(div3);

let header1Div3 = div3.firstElementChild;
header1Div3.innerText = 'I changed this text with JS also';

let header3Div3 = div3.lastElementChild;
header3Div3.innerText = 'Please check if i am lying :)';


//Adding text in second div in the <text> tag
let div2 = allDivs[1];
console.log(div2);

let textDiv2 = div2.lastElementChild;
textDiv2.innerText += ' Changing text inside them or maybe changing the HTML structure (adding or deleting element)';

/* Prasanja :
1. Koga koristime getElementsByClassName dali gi povikuvame DECATA na tagovite koi ja imaat taa klasa?
*/
