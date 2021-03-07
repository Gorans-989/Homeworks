function Library (name, books, address){
    this.name = name;
    this.books = books;
    this.address = address;
    this.numberOfMembers = function (){
        return this.books.length * 15;
    }
    this.printBooks = function () {
        this.books.forEach(book => console.log(book));
    }
    this.addBook = function (title, genre, authors){
        this.books.push(Object.create(new Book(title, genre, authors)));
    }
}

function Book (title, genre, authors) {
    this.title = title;
    this.genre = genre;
    this.libraries = [];
    this.authors = authors;
    this.addLibrary = function (object, library) {
        this.libraries.push(library);
        object.books.push(this.title);
    }
    this.removeLibrary = function (object, library) {
        this.libraries = this.libraries.filter(item1 => item1 != library);
        object.books = object.books.filter(item => item != this.title);
    }
}

function Authors (firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.books = [];
    this.currentBook = null;
    this.startBook = function (bookObject) {
        //this.currentBook === null? []:this.books.push(this.currentBook);

        if(this.currentBook !== null) {
            this.books.push(this.currentBook);
        }
        this.currentBook = Object.create(bookObject);
    }
}

let library1 = new Library('Kiril i Metodij', ['zoki poki', 'Mobi dick', 'tarzan'], 'K.j.Pitu br.19');

let book1 = new Book('zoki poki', 'detska', 'Petre Silegov');
let book2 = new Book('kasni porasni', 'detska', 'pero antic');
book1.addLibrary(library1, "brakja Miladinovci");
book1.removeLibrary(library1, "brakja Miladinovci");

let author1 = new Authors("Lav", "tolstoj", new Date(1892,12,23));
author1.startBook(book1);
let author2 = new Authors('Vidoe', 'Podgorec', new Date(1900, 05, 17));
author1.startBook(book1);