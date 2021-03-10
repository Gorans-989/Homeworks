class Animal {
    constructor (name, age, type, size) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.size = size;
        this.isEaten = false;
    }

    eat(input) {
        if (input instanceof Animal) {

            if (this.type === "herbivore") {
                console.log(`The animal ${this.name} is a herbivore and does not eat other animals`);
            }
            if (this.type !== "herbivore") {    
                if (input.size / 2 >= this.size) {
                    console.log (`The animal ${this.name} tried to eat the ${input.name} but it was too large`)
                }
                if (input.size / 2 < this.size) {
                    input.isEaten = true;
                    console.log (`The animal ${this.name} ate the ${input.name}`
                    )
                }
            }
            else if (!(input instanceof Animal)) {
                console.log (`The animal ${this.name} is eating ${input}`);
            }
        }
    }
}
let typeOfAnimal = ["carnivore", "herbivore", "omnivore"];
let dog = new Animal ("sputnik", 12, typeOfAnimal[1], 120);
let elephant = new Animal ('dambo', 6, typeOfAnimal[1], 500);
let crocodile = new Animal ('koko', 7, typeOfAnimal[0], 250);
let tiger = new Animal ('misko', 9, typeOfAnimal[2], 300);
let hippo = new Animal ('bobo', 14, typeOfAnimal[1], 420);
