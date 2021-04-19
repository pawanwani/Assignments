"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import book and BookManager class 
var Book_1 = require("./Book");
var Bookmanager_1 = require("./Bookmanager");
var books = []; //Array declaration 
var book1 = new Bookmanager_1.BookManager();
/* use of window function for delete operation
   beacuse primary function gives error as "function is not defined"
*/
window.app = {
    deleterow: deleterow
};
/* Add new book section */
function assignValue(data) {
    for (var i = 0; i < data.length; i++) {
        books.push(new Book_1.Book(data[i].id, data[i].title, data[i].author, data[i].price, data[i].rating, data[i].description));
    }
}
var submitFormEvent = document.getElementById("submit-form");
if (submitFormEvent != null) {
    submitFormEvent.onclick = function () {
        book1.addBooks();
    };
}
var showtable = document.getElementById("myBtn");
if (showtable != null) {
    showtable.onclick = function () {
        var localdatax = JSON.parse(localStorage.getItem('data'));
        assignValue(localdatax);
        book1.removerows(books);
        book1.displayBooks(books);
    };
}
/* Delete part */
function deleterow(value) {
    for (var i = 0; i < books.length; i++) {
        if (books[i].id == value) {
            books.splice(i, 1);
        }
    }
    localStorage.setItem('data', JSON.stringify(books));
}
/* Searching Operations => */
var myEvent = document.getElementById("search-btn");
if (myEvent != null) {
    myEvent.onclick = function () {
        var inputValue = document.getElementById("searchresult").placeholder;
        if (inputValue === "TITLE") {
            var titleName = document.getElementById("searchresult").value.toLowerCase();
            book1.searchByTitle(books, titleName);
        }
        else if (inputValue === "AUTHOR") {
            var authorName = document.getElementById("searchresult").value.toLowerCase();
            book1.searchByAuthor(books, authorName);
        }
        else if (inputValue === "ID") {
            var getID = document.getElementById("searchresult").value;
            book1.searchByID(books, parseInt(getID));
        }
        else if (inputValue === "MIN RATING") {
            var getRating = document.getElementById("searchresult").value;
            book1.searchByRating(books, parseInt(getRating));
        }
        else {
            var minPrice = document.getElementById("minPrice").value;
            var maxPrice = document.getElementById("maxPrice").value;
            book1.searchByPrice(books, parseInt(minPrice), parseInt(maxPrice));
        }
    };
}
var searchEvent = document.getElementById("search-options");
if (searchEvent != null) {
    searchEvent.onchange = function () {
        var x = document.getElementById("search-options").value;
        if (x === "ID") {
            document.getElementById("searchresult").placeholder = x;
        }
        else if (x === "TITLE") {
            document.getElementById("searchresult").placeholder = x;
        }
        else if (x === 'AUTHOR') {
            document.getElementById("searchresult").placeholder = x;
        }
        else if (x === 'MIN RATING') {
            document.getElementById("searchresult").placeholder = x;
        }
        else if (x === 'Price') {
            document.getElementById("searchresult").style.display = "none";
            document.getElementById("minPrice").style.display = "block";
            document.getElementById("maxPrice").style.display = "block";
        }
    };
}
