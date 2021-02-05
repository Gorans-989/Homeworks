let addressInfo = {
    street: 'Treta udarna brigada',
    streetNumber: 10,
    contactNumber: '070355123'
}

console.log(addressInfo.street, addressInfo.streetNumber)

let newEmptyObject = new Object ();

newEmptyObject.street = 'Oktomvriska revolucija';
newEmptyObject.streetNumber = 12;
newEmptyObject.city = 'Skopje';

console.log(newEmptyObject);
console.log(newEmptyObject.city);


function CreatingObject(x, y, z){
    this.name = x;
    this.phoneNumber = y;
    this.age = z;
    this.adultOrMinor = function(){
        if (this.age >= 18)  {
            return 'Adult';
        }
        else if (this.age <18) {
            return 'Minor';
        }
    }
}

let students = new CreatingObject ('Goran', '38970123456', 17);// koga se kreira konstruktor object , imeto na funkcijata e sekogas so Golema bukva. na toj nacin se raspoznava deka stanuva zbor za konstruktor funkcija
console.log(students.name);
console.log(students.adultOrMinor()); // ja povikuvam funkcijata da se izvrshi i moram da zadadam parametri. dokolku ne napisam() nema da se izvrshi bidejki nema parametri. so prazni zagradi kje se izvrshi funkcijata so parametrite koi se zadadeni vnatre vo nea.
let number = 10235;
let names = 'Konstantin';

console.log(number);
console.log(names);

console.log(`${number[0]}`);
console.log(names[0]);
console.log(`${names[0]}`)