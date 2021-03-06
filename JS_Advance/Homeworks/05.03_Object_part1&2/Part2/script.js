function Person (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = `${age} years`;
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

// odenje peski 
//let person1 = new Person("goran", 'stojanovski', 31);
// let person2 = new Person('bibi', 'tomic', 23);
// let person3 = new Person('iva', 'milkov', 38);
// let person4 = new Person('petar', 'petrov', 28);
// let person5 = new Person('kiko', 'zdravkov', 23);


function Animal (name, age) {
    this.name = name;
    this.age = age;
    this.eat = function (){
        //some code
    };
    this.sleep = function () {
        //some code
    };
}

let arrayOfColors = ["blue", "red", "green", "black", "gray"];
//ako ne go deklariram arrayot pred konstruktorot mi pojavuva greska, array is not defined
function Cat (ownerId, name, age) {
    Object.setPrototypeOf(this, new Animal(name, age));
    this.ownerId = ownerId;
    this.color = arrayOfColors[Math.floor((Math.random() * 4))];
    this.meow = function () {
        return `The cat ${this.name} says Meow`
    };
    // this.color = function () {
    //     this.color = arrayOfColors[Math.floor((Math.random() * 4))];
    // };
    this.ownerDetails = function () {
        this.ownerId === null? console.log(`The cat ${this.name} doesnt have an owner`):console.log(Object.values(arrayOfPeople[`${this.ownerId}`]));
    }
}


let cat1 = new Cat (0, 'misko', 7);
let cat2 = new Cat (2, 'despina', 4);

/*
let owner = "ownerDetails";
//Cat[owner] = function () {} ne mi uspea na ovoj nacin.
cat1[owner] = function () {
    
    //long version
    // if (this.ownerId === null) {
    //      console.log(`The cat ${this.name} doesnt have an owner`);
    // }; 
    // if (this.ownerId !== null) {
    //    console.log (`${this.ownerId} ${arrayOfPeople[`${this.ownerId}`]}`);
    // }; 
    
    //short version
    this.ownerId === null? console.log(`The cat ${this.name} doesnt have an owner`):console.log(Object.values(arrayOfPeople[`${this.ownerId}`]));
};
*/

function PersianCat (eyeColor, ownerId, name, age) {
    Object.setPrototypeOf(this, new Cat(ownerId, name, age));
    this.eyeColor = eyeColor;
    this.furDescription = function () {
        return console.log(`The cat ${this.name} has full fur`);
    }
}

function RagDollCat (weight, ownerId, name, age) {
    Object.setPrototypeOf(this, new Cat(ownerId, name, age));
    this.weight = weight;
    this.isFrendly = false;
    this.printPersonality = function (type) {
        if (type === true) {
            this.isFrendly = true;
            console.log(`The cat ${this.name} is frendly.`);
        }
        if (type === false) {
            this.isFrendly = false;
            console.log(`Watch out, the cat ${this.name} is not frendly`);
        };
    };
};


let arrayOfPeople = [new Person("goran", 'stojanovski', 31), new Person('bibi', 'tomic', 23), new Person('iva', 'milkov', 38), new Person('petar', 'petrov', 28),new Person('kiko', 'zdravkov', 23)];

let cat3 = new PersianCat ('hazel', 3, 'cacko', 31);
let cat4 = new RagDollCat ( 56, 4, 'tom', 9);