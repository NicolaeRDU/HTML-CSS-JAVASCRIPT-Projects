"use strict";

// Book class : a book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// Ui class : handle UI tasks
class Ui {
  static displayBooks() {
    const storedBooks = Store.getBooks();

    const books = storedBooks;

    books.forEach((book) => {
      Ui.addBookToList(book);
    });
  }
  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
     <td>${book.title}</td>
     <td>${book.author}</td>
     <td>${book.isbn}</td>
     <td><a href = "#" class ="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement("div");

    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");

    container.insertBefore(div, form);

    // Vanish in 3 seconds
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

// Store class : handle storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}

// Event : display books
document.addEventListener("DOMContentLoaded", Ui.displayBooks);

// Event : add a book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // Validate
  if (title === "" || author === "" || isbn === "") {
    Ui.showAlert("Please fill in all fields", "danger");
  } else {
    //   Instantiant book
    const book = new Book(title, author, isbn);

    //   Add Book to UI
    Ui.addBookToList(book);

    // Add book to store
    Store.addBook(book);

    // Show success message
    Ui.showAlert("Book added", "success");

    //   Clear Fields
    Ui.clearFields();
  }
});

// Event : remove book
document.querySelector("#book-list").addEventListener("click", (e) => {
  //   Remove book from UI
  Ui.deleteBook(e.target);

  // Remove from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show success message
  Ui.showAlert("Book removed", "success");
});
