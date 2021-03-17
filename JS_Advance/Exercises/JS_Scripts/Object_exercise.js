// go definirav submit kopceto. Potoa kje mu dodadam addEventListener koj kje povika funkcija cija zadaca e podatocite da gi napravi vo object i potoa toj object da go pushne vo array.


// gi definirav site inputi (deca se na form). tuka gi povikuvam samo elementite, no ne i vrednostite. moram potoa da dodadam tocka value .value 

let inputName = document.getElementById('firstName');
let inputLastName = document.getElementById('lastName');
let inputAge = document.getElementById('age');
let submitButton = document.getElementById('submitBtn');
let students = [];

// da definiram funkcija koja kje kreira object
function StudentsObjectCreator(studentName, studentLastName, studentAge) {
    this.studentName = studentName;
    this.studentLastName = studentLastName;
    this.studentAge = studentAge;
}
// Ovaa funkcija koga kje ja povikam kje kreira object so ime studentInfo vo koj ima 3 property
submitButton.addEventListener('click', function() {
    //debugger
    
    let studentInfo = new StudentsObjectCreator(inputName.value, inputLastName.value, inputAge.value);
    students.push(studentInfo);
    console.log(students);
    }, false);
//sega treba sekoj object da go dodava vo array koj se vika students. toa znaci so sekoj save se kreira object so 3 property (toa se podatocite za eden student) i potoa se dodava na arrayot koj se vika students. 

// da definiram prazen array


let animal = {
    name: "Bruce",
    kind: "dog",
    speak: function(){
        console.log(`This ${this.kind} says: Hey ${this.name}`);
    }
}

animal.speak();