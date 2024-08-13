let bookName = document.getElementById("bookName");
let page = document.getElementById("page");
let read = document.getElementById("read");
let author = document.getElementById("author");
let form = document.getElementById("form");
let library = document.getElementById("library");

let myLibrary = [
    new Book("The Hobbit", 295, true, "J.R.R. Tolkien"),
    new Book("Harry Potter", 400, false, "J.K. Rowling"),
    new Book("Lord of the Rings", 700, true, "J.R.R. Tolkien"),
];

function validateInput(input, name) {
    if (!input.checkValidity()) {
        if (input.validity.valueMissing) {
            return `${name} is required.`;
        }
        if (input.validity.tooShort) {
            return `${name} is too short.`;
        }
        if (input.validity.tooLong) {
            return `${name} is too long.`;
        }
        if (input.validity.typeMismatch) {
            return `Please enter a valid ${name}.`;
        }
        return `Invalid ${name}.`;
    }
    return null;
}

function validateForm() {
    const inputs = [
        { field: bookName, name: "Book Name" },
        { field: page, name: "Page" },
        { field: author, name: "Author" },
    ];

    for (let input of inputs) {
        const error = validateInput(input.field, input.name);
        if (error) {
            return error;
        }
    }

    return true;
}

function Book(bookName, page, read, author) {
    this.bookName = bookName;
    this.page = page;
    this.read = read;
    this.author = author;

    this.getInfo = function () {
        if (this.read) {
            return `${this.bookName} by ${this.author}, ${this.page} pages, Read`;
        } else {
            return `${this.bookName} by ${this.author}, ${this.page} pages, Not read yet!!!`;
        }
    };
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
    library.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "My List";
    library.appendChild(heading);

    myLibrary.forEach(function (book, index) {
        const li = document.createElement("li");
        const buttonDiv = document.createElement("div");
        const removeButton = document.createElement("button");
        const readButton = document.createElement("button");
        li.textContent = book.getInfo();
        buttonDiv.classList.add("button-div");
        removeButton.classList.add("detail-button");
        readButton.classList.add("detail-button");
        removeButton.textContent = "Remove";
        readButton.textContent = book.read ? "Read" : "Not read yet";
        removeButton.addEventListener("click", function () {
            deleteBook(index);
        });
        readButton.addEventListener("click", function () {
            toggleRead(index);
        });
        buttonDiv.appendChild(removeButton);
        buttonDiv.appendChild(readButton);
        li.appendChild(buttonDiv);
        library.appendChild(li);
    });
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const validationMessage = validateForm();
    if (validationMessage !== true) {
        alert(validationMessage);
    } else {
        addBookToLibrary();
    }
});

displayBooks();

function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function toggleRead(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}

document.querySelector(".clear").addEventListener("click", function () {
    myLibrary.length = 0;
    displayBooks();
});
