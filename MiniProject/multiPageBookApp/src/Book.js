"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(id, title, author, price, rating, description) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.rating = rating;
        this.description = description;
    }
    return Book;
}());
exports.Book = Book;
