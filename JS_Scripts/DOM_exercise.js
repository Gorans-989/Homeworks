let input = parseInt(prompt('how much do you weight in kg.(write only number!)'));
let resultDiv = document.getElementById('result');

//Sakav da se obidam na ovoj nacin.
function weightInChickens (weight){   
    //debugger 
    if (typeof(weight) === 'number' && !isNaN(weight)) {
        result = weight / 0.5;
        return resultDiv.innerHTML = `<p> Your weight of ${weight} is equal to ${result} chikens </p>`;
    }
    else {resultDiv.innerHTML = `<p> This input is not of valid type. Please type only numbers</p>`};
}
weightInChickens(input);


