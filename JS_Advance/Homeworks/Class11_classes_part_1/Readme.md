# Exercise
## Create a class Animal that has:
* name
* type - carnivore/herbivore/omnivore
* age
* size
* eat - a method that checks if the input is an Animal.
	* If the input is an Animal and If this object animal is herbivore write in the console: The animal ( this animal name ) is a herbivore and does not eat other animals
	* If the input is an Animal, and If this object animal is not herbivore, then change the input Animal property isEaten to true and log in the console: The animal (this animal name) ate the (the input animal name). 
	* If the animal is twice as large or larger than this animal than just log in the console: The animal (this animal name) tried to eat the (the input animal name) but it was too large. 
	* If the input is not an animal just write: The animal (this animal name) is eating (the input).
* isEaten = default false

# Homework
## Create a class Person that has:
* firstName
* lastName
* age
* address
* fullName - method that logs full name
*create a setter and getter for the each property. The setter/getter will log a corresponding message. The setter should do validation.
 
Add class Student, that inherits from Person. It should have property that is an array of strings. It should
have property academy, that is also a string. Add static method, that takes two parameters, a student and a subject
and checks if the student studies the subject. Check if the first parameter is student in the static method.
* Create student objects. Try logging their full names, try checking different subjects.