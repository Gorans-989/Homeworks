/* # Exercises
There is a JSON file with students. Make a call to the file and get the following data from it: 
Use higher order functions to find the answers
**Link:** https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json
 */


 //* All students with an average grade higher than 3
let averageGrade3 = studentArray.filter(x => x.averageGrade === 3);//namerno iskoristiv x kako ime na parametar za da testiram. Imeto e na promenlivata e nezavisno od property-to vo objektot sto go povikuvame
//  console.log(averageGrade3);

 //* All female student names with an average grade of 5
let femaleStudents = studentArray
                    .filter(femStudent => femStudent.gender === 'Female')//napisav 'female' i mi vrati prazen array bidejki vo objektot e vneseno so golema bukva 'F'. kako da napravam proverka i da gi ignorira golemite i malite bukvi?
                    .filter(femStudent => femStudent.averageGrade === 5)
                    .map(femStudent => {
                        return {
                            firstName: femStudent.firstName
                        };
                    });
// console.log(femaleStudents);

//* All male student full names who live in Skopje and are over 18 years old
let maleStudents = studentArray
                    .filter(males => males.gender === 'Male')
                    .filter(males => males.city === 'Skopje' && males.age > 18)
                    .map(males => {
                        return {
                            fullName: `${males.firstName} ${males.lastName}`
                        };
                    });
// console.log(maleStudents);

//* The average grades of all female students over the age  of 24
let averageGradesOfFemStudents = studentArray
                    .filter(females => females.gender === 'Female' && females.age > 24)
                    // console.log(averageGradesOfFemStudents);proverka
                    .map(females => {// istata postapka kako i kaj filter. Mora da ima return
                        return { // stavam zagradi bidejki sakam da mi vrati object
                            averageGrades: females.averageGrade
                        };
                    });
// console.log(averageGradesOfFemStudents);

// * All male students with a name starting with B and average grade over 2
let maleSort = studentArray
                    .filter(students => students.gender === 'Male')
                    // console.log(maleSort)
                    .filter(students => students.firstName[0] === 'B' && students.averageGrade > 2)
console.log(maleSort);

// Create a Constructor function for product. Each product has property name, category, hasDiscount and price.
// Create an array of 15 products. 
// Now answer the following requirements:

// * Find all products with price greater than 20.
// * Get the names of all products of Category Food, that are on discount.
// * The average price of all products that are on discount.
// * Find the name and price of all products with name starting with a vowel, that are not on discount.
// * Sort the products by price, ascending, without changing the original array.

// Use higher order functions to find the answers.

function Product (name, category, discount, price) {
    this.name = name;
    this.category = category;
    this.hasDiscount = discount;
    this.price = price;
}

let products = [new Product('mleko', 'pijaloci', true, 60), new Product('sok', 'pijaloci', true, 48), new Product('oriz', 'hrana', false, 30), new Product('rebra', 'hrana', false, 240), new Product('pivo', 'pijaloci', true, 40), new Product('giro', 'hrana', true, 150)];

let priceGreaterThan20 = products.filter(product => product.price > 50);
let noDiscount = products.filter(product => !product.hasDiscount);
let onDiscount = products.filter(product => product.hasDiscount === true);
let average = onDiscount.forEach(product => {
    return product.price;})

