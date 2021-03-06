function Academy(name,start, end){
    this.name = name;
    this.students = [students]; //
    this.subjects = [subjects];//
    this.starDate = new Date(start);
    this.endDate = new Date(end);
    this.numberOfClasses = function () {
        return subjects.length * 10; // kako da izmeram dolzina na objektot 
    };
    this.printStudents = function () {
        for (let student of this.students) {
            console.log(`${student.firstName} ${student.lastName}`);
        }
    };
    this.printSubjects = function (){
        for (let subject of this.subjects) {
            console.log(subject.title);
        }
    };
}

let students = new Student ("goran", "stojanovski", 31)// ako go povikam posle academy mi javuva error bidejki ne e inicijaliziran pred academy
let academy = new Academy ("Programing", 2020/03/23, 2021/03/23)
let subjects = new Subject("web", 4);
console.log(academy)




function Subject (title, number) {
    this.title = title;
    this.numberOfClasses = 10; // treba da bide povrzano so academy
    this.isElective = true;
    this.academy = academy === undefined? "no academy":academy;//
    this.students = students; // da bide povrzano so akademi
    this.overrideClasses = () => {
        if (number > 3) {
            return this.numberOfClasses = number;
        }
    }
}



function Student (name, lastName, age) {
    this.firstName = name;
    this.lastName = lastName;
    this.age = age;
    this.completed = [];
    this.academy = null;//
    this.currentSubject = null;//
    this.startAcademy = null;//
    this.startSubject = "";//;
}

/*
let hero = {
    fname: 'Batman',
    realName: 'Bruce Wayne',
    skills: {
        Jui_jitsu: true,
        karate: true,
        rich: true
    },
    gadgets:["batmobile", "smoke", "grapling gun"]
};

hero.car = "batmobile";
hero.comicStudio = "DC"
console.log(hero);
 //
 

  //const hero = {name: 'Batman'};
  
const {fname, realName, skills,gadgets, age = 35} = hero;
console.log(fname, realName, skills, gadgets);

// console.log(gadgets);

let rgb = [255, 200, 0];

const [goran, zoran, mile] = rgb;
// console.log(goran, zoran, mile);
*/
function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = () => {
        return console.log(`${this.firstName} ${this.lastName}`);
    }
}

function Student (academy, studentId, firstName, lastName, age){
    Object.setPrototypeOf(this, new Person(firstName, lastName, age));
    this.academyName = academy;
    this.studentId = studentId;
    this.study = function() {
        return console.log(`The student ${this.firstName} is going on ${this.academyName} academy`)
    }
}

let student = new Student('Web development', 1, "goran", "stojanovski", 31);
let student2 = Object.create(new Student('Web Design', 2, 'Ivana', 'valiseva', 26));

student.prototype.showAcademy = function() {
    
}
