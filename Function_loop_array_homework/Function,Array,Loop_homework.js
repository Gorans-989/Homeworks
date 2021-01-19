// Homework1
function createSentence(array) {
    console.log(`${array[0]} ${array[1]} ${array[2]} ${array[3]} ${array[4]} ${array[5]}`);
}
let stringArray = ["This", "is", "an", "exercise", "for", "functions."];
createSentence(stringArray);

// HomeWork2
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
function everyNumInArray(array) {
    let result = [];

    for(let i=0; i<array.length; i++) {
            
        if (array[i] % 2 === 0) {
            result.push(array[i], "\n");
        }
        else {
            result.push(" ")
        }
    }
    return result;
}
let result1 = everyNumInArray(numberArray);
console.log(`${result1}`);


// Homework3
let arrayWithNumbers = [22, 65, 32, "world", 12, 8, "water", 11, 66];
function sumOfMinAndMax (array) {
    let onlyNumbersArray = filteringArray(array);
    let a = Math.min(...onlyNumbersArray);
    let b = Math.max(...onlyNumbersArray);
    let result = a + b;

    function filteringArray (array) {
        let result = [];
        for(let i=0; i<array.length; i++) {
            if (typeof(array[i]) === "number") {
                result.push(array[i]);
            }
            else {
                continue;
            }
        }
        return result;
    }
    return result;
}
let sum = sumOfMinAndMax(arrayWithNumbers);
console.log(`This is the sum of Min and Max of an Array = ${sum}`);


// Homework4
let firstNames = ["Goran", "Kiki", "Riste"];
let lastNames = ["Stojanovski", "Zlatevska", "Stevkovski"];
function concatenateStrings(array1, array2) {
    let fullNameArray = [];
    let numList = 1;
    for (let i=0; i<array1.length && i<array2.length; i++) {
        fullNameArray.push(`${numList}. ${array1[i]} ${array2[i]}`);
        numList++; 
    }
    return fullNameArray;
}
let fullNames = concatenateStrings(firstNames, lastNames);
console.log(fullNames);