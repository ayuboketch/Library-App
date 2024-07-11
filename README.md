![Screenshot 2024-07-11 at 16 47 49](https://github.com/ayuboketch/Library-App/assets/17433791/448106c6-174c-4fde-bfb3-a5b10784acfa)

# Library App

## Overview

The Library App is a simple web application designed to help users manage a list of books. Users can add books to the library by entering the book's name, author, number of pages, and whether they have read the book. The app displays the list of books in a neatly organized manner.

## Features

- Add new books to the library with details such as name, author, number of pages, and read status.
- Display the list of books added to the library.
- User-friendly interface with form validation.

## Technologies Used

- HTML
- CSS
- JavaScript

## Installation

To run the Library App locally on your machine, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/library-app.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd library-app
    ```

3. **Open the `index.html` file in your web browser:**
    ```bash
    open index.html
    ```

## Usage

1. Open the app in your web browser.
2. Fill in the form with the book's details (name, author, number of pages, and read status).
3. Click the "Submit" button to add the book to the library.
4. The book will be displayed in the library list on the right side of the form.

## File Structure

```
library-app/
├── index.html
├── style.css
└── script.js
```

- **index.html**: The main HTML file containing the structure of the application.
- **style.css**: The CSS file for styling the application.
- **script.js**: The JavaScript file containing the logic for adding books to the library and displaying them.

## Contributing

If you would like to contribute to the project, feel free to fork the repository and submit a pull request. Please ensure your changes are well-documented and tested.

## Example Code Snippets

### HTML (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Library App</title>
</head>
<body>
    <form id="form">
        <h1>Library App</h1>
        <div class="form">
            <label for="bookName">Book Name</label>
            <input type="text" id="bookName">
        </div>
        <div class="form">
            <label for="page">Page</label>
            <input type="number" id="page">
        </div>
        <div class="form">
            <label for="read">Read</label>
            <input type="checkbox" id="read">
        </div>
        <div class="form">
            <label for="author">Author</label>
            <input type="text" id="author">
        </div>
        <button type="submit" id="submit">Submit</button>
    </form>
    <div id="library"></div>
    <script src="script.js"></script>
</body>
</html>
```

### CSS (style.css)

```css
body {
    background-color: #f0f8ff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
    background-image: url('./library-art-book-theme-rth0ek661fi3zdwz.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

form {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    width: 300px;
    margin-right: 20px;
}

h1 {
    text-align: center;
}

.form {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="number"],
input[type="checkbox"] {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #ccc;
}

button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

#library {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    width: 300px;
}
```

### JavaScript (script.js)

```javascript
let bookName = document.getElementById("bookName");
let page = document.getElementById("page");
let read = document.getElementById("read");
let author = document.getElementById("author");
let form = document.getElementById("form");
let library = document.getElementById("library");
let submit = document.getElementById("submit");

function Book(bookName, page, read, author) {
    this.bookName = bookName;
    this.page = page;
    this.read = read;
    this.author = author;

    this.getInfo = function() {
        return `${this.bookName} by ${this.author}, ${this.page} pages, ${this.read ? "read" : "not read yet"}`;
    }
}

const myLibrary = [
    new Book("The Hobbit", 295, true, "J.R.R. Tolkien"),
    new Book("Harry Potter", 400, false, "J.K. Rowling"),
    new Book("Lord of the Rings", 700, true, "J.R.R. Tolkien"),
];

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
    myLibrary.forEach(book => {
        const bookInfo = document.createElement("p");
        bookInfo.textContent = book.getInfo();
        library.appendChild(bookInfo);
    });
}

submit.addEventListener("click", function(event) {
    event.preventDefault();
    addBookToLibrary();
});

displayBooks();
```

---

This README provides an overview of your project, instructions for installation and usage, and code snippets for quick reference. You can customize and expand it further based on your needs.
