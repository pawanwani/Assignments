"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookManager = void 0;
var BookManager = /** @class */ (function () {
    function BookManager() {
    }
    BookManager.prototype.addBooks = function () {
        var book = {
            id: document.getElementById("id").value,
            title: document.getElementById("title").value,
            author: document.getElementById("author-name").value,
            price: document.getElementById("price").value,
            rating: document.getElementById("rating").value,
            description: document.getElementById("description").value
        };
        if (localStorage.getItem('data') == null) {
            localStorage.setItem('data', '[]');
        }
        var old_data = JSON.parse(localStorage.getItem('data'));
        old_data.push(book);
        localStorage.setItem('data', JSON.stringify(old_data));
    };
    BookManager.prototype.displayBooks = function (books) {
        this.removerows(books);
        var table = document.getElementById("myTable");
        for (var i = 0; i < books.length; i++) {
            var row = "<tr>\n                            <td>" + books[i].id + "</td>\n                            <td>" + books[i].title + "</td>\n                            <td>" + books[i].author + "</td>\n                            <td>" + books[i].rating + "</td>\n                            <td>" + books[i].price + "</td>\n                            <td>\n                                <input type=\"button\" class=\"row\" value=\"Delete\" onclick=\"app.deleterow(" + books[i].id + ")\"></input>\n                            </td>\n                    </tr>";
            table.innerHTML += row;
        }
    };
    BookManager.prototype.searchByPrice = function (books, minPrice, maxPrice) {
        var mytbl = document.getElementById("myTable");
        var tr = mytbl.getElementsByTagName('tr');
        for (var i = 0; i < books.length; i++) {
            if (books[i].price >= minPrice && books[i].price <= maxPrice) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    };
    BookManager.prototype.searchByAuthor = function (books, authorName) {
        var mytbl = document.getElementById("myTable");
        var tr = mytbl.getElementsByTagName('tr');
        for (var i = 0; i < books.length; i++) {
            if ((books[i].author).valueOf().toLowerCase().trim() === authorName.toLowerCase().trim()) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    };
    BookManager.prototype.searchByTitle = function (books, BookTitle) {
        var mytbl = document.getElementById("myTable");
        var tr = mytbl.getElementsByTagName('tr');
        for (var i = 0; i < tr.length; i++) {
            if ((books[i].title).valueOf().toLowerCase().trim() === BookTitle.toLowerCase().trim()) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    };
    BookManager.prototype.searchByID = function (books, BookId) {
        var mytbl = document.getElementById("myTable");
        var tr = mytbl.getElementsByTagName('tr');
        for (var i = 0; i < books.length; i++) {
            if (books[i].id === BookId) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    };
    BookManager.prototype.searchByRating = function (books, rating) {
        var mytbl = document.getElementById("myTable");
        var tr = mytbl.getElementsByTagName('tr');
        for (var i = 0; i < books.length; i++) {
            if (books[i].rating > rating) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    };
    BookManager.prototype.removerows = function (books) {
        var mytbl = document.getElementById("myTable");
        var tr = mytbl.getElementsByTagName('tr');
        for (var i = 0; i < books.length; i++) {
            tr[i].style.display = "none";
        }
    };
    return BookManager;
}());
exports.BookManager = BookManager;
