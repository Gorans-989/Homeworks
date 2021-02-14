// # Exercises
// ## Generating arrays



// ## Clean arrays



// * Test arrays:
// ```js

// * Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
let array1 = [];
for(let i = 1; i <= 1000; i++){
    if(i % 3 === 0) {
        array1.push(i);
    }
    else {
        continue;
    }
}
console.log(array1)
//end

// * Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
// generating the array with even numbers
let array2 = [];
for(let j = 1; j <= 1000; j++) {
    if(j % 2 === 0) {
        array2.push(j);
    }
    else {
        continue;
    }
}
console.log(array2);
//end


//generating the array with number divisable with 4
let array3 = [];
for(let num of array2) {
    if(num % 4 === 0) {
        array3.push(num);
    }
    else {
        continue;
    }
}
console.log(array3);
//end


// * Generate an array that has all the numbers that end with the digit 1 from 1 to 1000
let array4 = [];
for(let k = 1; k <= 1000; k++) {
    if(k % 10 === 1 ) {
        array4.push(k);
    }
    else {
        continue;
    }
}
console.log(array4);
//end


// * Create a function that cleans an array of any values and leaves only STRINGS
let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];
function cleanArrayOfValues(array) {
    let result = [];
    for(let item of array) {
        if(typeof(item) === 'string' && item !== "") {
            result.push(item);
        }
    }
    return result;
}
let newArray = cleanArrayOfValues(test);
console.log(newArray);
//end


// * Create a function that cleans an array of any values and leaves only NUMBERS
let test1 = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];
function cleanArrayWithNumbers(array) {
    let result = [];
    for(let item of array) {
        if(typeof(item) === 'number' && !isNaN(item)) {
            result.push(item);
        }
    }
    return result;
}
let onlyNumArray = cleanArrayWithNumbers(test1);
console.log(onlyNumArray);
//end


// * Create a function that cleans undefined, null, NaN and "" and leaves all other values
let test2 = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

function cleanArray(array) {
    let result = [];
    for(let item of array) {
        if(!item && typeof(item) !== "boolean") {
            continue;   
        }
        else{
            result.push(item);
        }
    }
    return result;
}
let newArray1 = cleanArray(test2);
console.log(newArray1); 