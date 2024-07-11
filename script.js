let bookName = document.getElementById("bookName");
let page = document.getElementById("page");
let read = document.getElementById("read");
let author = document.getElementById("author");
let form = document.getElementById("form");
let library = document.getElementById("library");

const myLibrary = [
    new Book("The Hobbit", 295, true, "J.R.R. Tolkien"),
    new Book("Harry Potter", 400, false, "J.K. Rowling"),
    new Book("Lord of the Rings", 700, true, "J.R.R. Tolkien"),
];

function Book(bookName, page, read, author) {
    this.bookName = bookName;
    this.page = page;
    this.read = read;
    this.author = author;

    this.getInfo = function() {
        if (this.read) {
            return `${this.bookName} by ${this.author}, ${this.page} pages, Read`;
        } else {
            return `${this.bookName} by ${this.author}, ${this.page} pages, Not read yet!!!`;
        }
    }
}

function addBookToLibrary() {
    const newBook = new Book(
        bookName.value,
        parseInt(page.value),
        read.checked,
        author.value
    );
    myLibrary.push(newBook);
    displayBooks();
    bookName.value = "";
    page.value = "";
    read.checked = false;
    author.value = "";
}

function displayBooks() {
    library.innerHTML = "<h1 style='align-text: center'> My List </h1>"; // Clear the library div
    myLibrary.forEach(book => {
        const bookInfo = document.createElement("p");
        bookInfo.textContent = book.getInfo();
        library.appendChild(bookInfo);
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
});

// Initial display of books
displayBooks();
