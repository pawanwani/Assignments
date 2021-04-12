/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Book.ts":
/*!*********************!*\
  !*** ./src/Book.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Book = void 0;\r\nvar Book = /** @class */ (function () {\r\n    function Book(id, title, author, price, rating, description) {\r\n        this.id = id;\r\n        this.title = title;\r\n        this.author = author;\r\n        this.price = price;\r\n        this.rating = rating;\r\n        this.description = description;\r\n    }\r\n    return Book;\r\n}());\r\nexports.Book = Book;\r\n\n\n//# sourceURL=webpack://miniProject/./src/Book.ts?");

/***/ }),

/***/ "./src/Bookmanager.ts":
/*!****************************!*\
  !*** ./src/Bookmanager.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.BookManager = void 0;\r\nvar BookManager = /** @class */ (function () {\r\n    function BookManager() {\r\n    }\r\n    BookManager.prototype.addBooks = function () {\r\n        var book = {\r\n            id: document.getElementById(\"id\").value,\r\n            title: document.getElementById(\"title\").value,\r\n            author: document.getElementById(\"author-name\").value,\r\n            price: document.getElementById(\"price\").value,\r\n            rating: document.getElementById(\"rating\").value,\r\n            description: document.getElementById(\"description\").value\r\n        };\r\n        if (localStorage.getItem('data') == null) {\r\n            localStorage.setItem('data', '[]');\r\n        }\r\n        var old_data = JSON.parse(localStorage.getItem('data'));\r\n        old_data.push(book);\r\n        localStorage.setItem('data', JSON.stringify(old_data));\r\n    };\r\n    BookManager.prototype.displayBooks = function (books) {\r\n        var table = document.getElementById(\"myTable\");\r\n        // let tablerows = document.querySelectorAll(\"#myTable\")\r\n        // for(let j=0;j<tablerows.length;j++){\r\n        //     tablerows[j].remove();\r\n        // }\r\n        for (var i = 0; i < books.length; i++) {\r\n            var row = \"<tr>\\n                            <td>\" + books[i].id + \"</td>\\n                            <td>\" + books[i].title + \"</td>\\n                            <td>\" + books[i].author + \"</td>\\n                            <td>\" + books[i].rating + \"</td>\\n                            <td>\" + books[i].price + \"</td>\\n                            <td>\\n                                <input type=\\\"button\\\" class=\\\"row\\\" value=\\\"Delete\\\" onclick=\\\"app.deleterow(\" + books[i].id + \")\\\"></input>\\n                            </td>\\n                    </tr>\";\r\n            table.innerHTML += row;\r\n        }\r\n    };\r\n    BookManager.prototype.searchByPrice = function (books, minPrice, maxPrice) {\r\n        var mytbl = document.getElementById(\"myTable\");\r\n        var tr = mytbl.getElementsByTagName('tr');\r\n        for (var i = 0; i < books.length; i++) {\r\n            if (books[i].price >= minPrice && books[i].price <= maxPrice) {\r\n                tr[i].style.display = \"\";\r\n            }\r\n            else {\r\n                tr[i].style.display = \"none\";\r\n            }\r\n        }\r\n    };\r\n    BookManager.prototype.searchByAuthor = function (books, authorName) {\r\n        var mytbl = document.getElementById(\"myTable\");\r\n        var tr = mytbl.getElementsByTagName('tr');\r\n        for (var i = 0; i < books.length; i++) {\r\n            if ((books[i].author).valueOf().toLowerCase().trim() === authorName.toLowerCase().trim()) {\r\n                tr[i].style.display = \"\";\r\n            }\r\n            else {\r\n                tr[i].style.display = \"none\";\r\n            }\r\n        }\r\n    };\r\n    BookManager.prototype.searchByTitle = function (books, BookTitle) {\r\n        var mytbl = document.getElementById(\"myTable\");\r\n        var tr = mytbl.getElementsByTagName('tr');\r\n        for (var i = 0; i < tr.length; i++) {\r\n            if ((books[i].title).valueOf().toLowerCase().trim() === BookTitle.toLowerCase().trim()) {\r\n                tr[i].style.display = \"\";\r\n            }\r\n            else {\r\n                tr[i].style.display = \"none\";\r\n            }\r\n        }\r\n    };\r\n    BookManager.prototype.searchByID = function (books, BookId) {\r\n        var mytbl = document.getElementById(\"myTable\");\r\n        var tr = mytbl.getElementsByTagName('tr');\r\n        for (var i = 0; i < books.length; i++) {\r\n            if (books[i].id === BookId) {\r\n                tr[i].style.display = \"\";\r\n            }\r\n            else {\r\n                tr[i].style.display = \"none\";\r\n            }\r\n        }\r\n    };\r\n    BookManager.prototype.searchByRating = function (books, rating) {\r\n        var mytbl = document.getElementById(\"myTable\");\r\n        var tr = mytbl.getElementsByTagName('tr');\r\n        for (var i = 0; i < books.length; i++) {\r\n            if (books[i].rating > rating) {\r\n                tr[i].style.display = \"\";\r\n            }\r\n            else {\r\n                tr[i].style.display = \"none\";\r\n            }\r\n        }\r\n    };\r\n    return BookManager;\r\n}());\r\nexports.BookManager = BookManager;\r\n/* cost foundItem = items.find((item)=>{\r\n    return item.title === 'title_name'\r\n}) */\r\n/* cost foundItem = items.filter((item)=>{\r\n    return item.rating >=4\r\n}) */\r\n\n\n//# sourceURL=webpack://miniProject/./src/Bookmanager.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n// import book and BookManager class \r\nvar Book_1 = __webpack_require__(/*! ./Book */ \"./src/Book.ts\");\r\nvar Bookmanager_1 = __webpack_require__(/*! ./Bookmanager */ \"./src/Bookmanager.ts\");\r\nvar books = []; //Array declaration \r\nvar book1 = new Bookmanager_1.BookManager();\r\n/* use of window function for delete function\r\n   beacuse primary function gives error as \"function is not defined\"\r\n*/\r\nwindow.app = {\r\n    deleterow: deleterow\r\n};\r\n/* Add new book section */\r\nvar addBooks = document.getElementById(\"add-book\");\r\nif (addBooks != null) {\r\n    addBooks.onclick = function () {\r\n        document.getElementById(\"addbook-part\").style.display = \"block\";\r\n        document.getElementById(\"displaybook-part\").style.display = \"none\";\r\n    };\r\n}\r\nfunction assignValue(data) {\r\n    for (var i = 0; i < data.length; i++) {\r\n        books.push(new Book_1.Book(data[i].id, data[i].title, data[i].author, data[i].price, data[i].rating, data[i].description));\r\n    }\r\n}\r\nvar submitFormEvent = document.getElementById(\"submit-form\");\r\nif (submitFormEvent != null) {\r\n    submitFormEvent.onclick = function () {\r\n        book1.addBooks();\r\n    };\r\n}\r\nvar showtable = document.getElementById(\"myBtn\");\r\nif (showtable != null) {\r\n    showtable.onclick = function () {\r\n        document.getElementById(\"displaybook-part\").style.display = \"block\";\r\n        document.getElementById(\"addbook-part\").style.display = \"none\";\r\n        var localdatax = JSON.parse(localStorage.getItem('data'));\r\n        assignValue(localdatax);\r\n        book1.displayBooks(books);\r\n    };\r\n}\r\n/* Delete part */\r\nfunction deleterow(value) {\r\n    for (var i = 0; i < books.length; i++) {\r\n        if (books[i].id == value) {\r\n            books.splice(i, 1);\r\n        }\r\n    }\r\n    localStorage.setItem('data', JSON.stringify(books));\r\n}\r\n/* Searching Operations => */\r\nvar myEvent = document.getElementById(\"search-btn\");\r\nif (myEvent != null) {\r\n    myEvent.onclick = function () {\r\n        var inputValue = document.getElementById(\"searchresult\").placeholder;\r\n        if (inputValue === \"TITLE\") {\r\n            var titleName = document.getElementById(\"searchresult\").value.toLowerCase();\r\n            book1.searchByTitle(books, titleName);\r\n        }\r\n        else if (inputValue === \"AUTHOR\") {\r\n            var authorName = document.getElementById(\"searchresult\").value.toLowerCase();\r\n            book1.searchByAuthor(books, authorName);\r\n        }\r\n        else if (inputValue === \"ID\") {\r\n            var getID = document.getElementById(\"searchresult\").value;\r\n            book1.searchByID(books, parseInt(getID));\r\n        }\r\n        else if (inputValue === \"MIN RATING\") {\r\n            var getRating = document.getElementById(\"searchresult\").value;\r\n            book1.searchByRating(books, parseInt(getRating));\r\n        }\r\n        else {\r\n            var minPrice = document.getElementById(\"minPrice\").value;\r\n            var maxPrice = document.getElementById(\"maxPrice\").value;\r\n            book1.searchByPrice(books, parseInt(minPrice), parseInt(maxPrice));\r\n        }\r\n    };\r\n}\r\nvar searchEvent = document.getElementById(\"search-options\");\r\nif (searchEvent != null) {\r\n    searchEvent.onchange = function () {\r\n        var x = document.getElementById(\"search-options\").value;\r\n        if (x === \"ID\") {\r\n            document.getElementById(\"searchresult\").placeholder = x;\r\n        }\r\n        else if (x === \"TITLE\") {\r\n            document.getElementById(\"searchresult\").placeholder = x;\r\n        }\r\n        else if (x === 'AUTHOR') {\r\n            document.getElementById(\"searchresult\").placeholder = x;\r\n        }\r\n        else if (x === 'MIN RATING') {\r\n            document.getElementById(\"searchresult\").placeholder = x;\r\n        }\r\n        else if (x === 'Price') {\r\n            document.getElementById(\"searchresult\").style.display = \"none\";\r\n            document.getElementById(\"minPrice\").style.display = \"block\";\r\n            document.getElementById(\"maxPrice\").style.display = \"block\";\r\n        }\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack://miniProject/./src/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;