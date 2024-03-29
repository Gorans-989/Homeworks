class Animal {
    constructor (name, age, type, size) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.size = size;
        this.isEaten = false;
    }

    eat(input) {
        //ne mi teknuva drug nacin osven so if funkcii
        if (input instanceof Animal) {
            //  
            if (this.type === "herbivore") {
                console.log(`The animal ${this.name} is a herbivore and does not eat other animals`);
            }  
        }
        if(input instanceof Animal && this.type !== "herbivore" )
        {
            if(input.size /2 >= this.size)
            {
                console.log(`${this.name} tried to eat the ${input.name} but is was to large`)
            }
            else
            {
                this.isEaten = true;
                console.log(`the animal ${this.name} ate the ${input.name}`);    
            }
        }
        if(!(input instanceof Animal))
        {
            console.log(`${this.name} is eating the ${input.name}`);

        }

    }
} 


let typeOfAnimal = ["carnivore", "herbivore", "omnivore"];
let dog = new Animal ("sputnik", 12, "herbivore", 120);
let elephant = new Animal ('dambo', 6, typeOfAnimal[1], 600);
let crocodile = new Animal ('koko', 7, typeOfAnimal[0], 250);
let tiger = new Animal ('misko', 9, typeOfAnimal[2], 300);
let hippo = new Animal ('bobo', 14, typeOfAnimal[1], 420);

dog.eat(crocodile);
tiger.eat(elephant);
crocodile.eat(dog);
elephant.eat(tiger);



class Person {
    constructor (firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }

    fullName = () => {
        return `${this.firstName} ${this.lastName}`;
    }

    // ne mi se jasni getter i setter!
    // get something () {
    //     // log a message
    //     console.log(`(get) The result is:_________`)
    // }

    // set  firstName (firstName) {
    //     if(!firstName) {
    //         console.log(`Please input a valid name`);
    //     }
    //     if(firstName) {
    //         console.log(`we are setting the name`);
    //     }
    //     //do validation
    //     console.log(`Please wait for the result.`)
    // }
}

class Student extends Person {
    constructor(firstName, lastName, age, address,subjects, academy) {
        super(firstName, lastName, age, address);
        this.academy = academy;
        this.subjects = subjects;
    }

    static studentMethod (student, subject) {
        if(student instanceof Student)
        {
            if (student.subjects.includes(subject))
            {
                
                console.log(`The student ${student.firstName} ${student.lastName} is already studying ${subject}`);
            }
            else 
            {
                console.log(`The student:${student.fullName()} doesnt study ${subject}`);
            }
        }
        if(!(student instanceof Student))
        {
            { throw new Error ("pero")}
        }
        // else { throw new Error ("The first parameter is not of type student")}
    }
}

let student1 = new Student('ivan', 'ivanov', 23, 'partizanska', ['math', 'science', 'biology'], 'semos');
let student2 = new Student('iva', 'petrova', 31, 'razloska', ["history", "english", "science"], 'different');

Student.studentMethod(student1, "science");
Student.studentMethod(student2, "fizicko");
//Student.studentMethod(dog, "english");

try 
{
    Student.studentMethod(dog, "english")

} catch (error) 
{
    console.log(error)
    
}