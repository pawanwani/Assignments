// import book and BookManager class 
import {Book} from './Book';
import {BookManager} from './Bookmanager';

let books: Book[] = [];       //Array declaration 

let book1 = new BookManager();
declare var window: any;     
/* use of window function for delete operation 
   beacuse primary function gives error as "function is not defined"
*/
window.app = {
   deleterow
};

 /* Add new book section */ 
function assignValue(data){
   for(let i=0;i<data.length; i++){
      books.push(new Book(data[i].id,data[i].title,data[i].author,data[i].price,data[i].rating,data[i].description))
   }
}
let submitFormEvent = document.getElementById("submit-form")
if(submitFormEvent!=null){
   submitFormEvent.onclick = function(){
      book1.addBooks();
   }
}
let showtable =document.getElementById("myBtn")
if(showtable!=null){
   showtable.onclick=function(){
      let localdatax = JSON.parse(localStorage.getItem('data'));
      assignValue(localdatax);
      book1.displayBooks(books);
   }
}
/* Delete part */
function deleterow(value){
   for(let i=0;i<books.length;i++){
      if(books[i].id == value){
          books.splice(i,1)
      }
   } 
   localStorage.setItem('data',JSON.stringify(books));
 }

/* Searching Operations => */
let myEvent=document.getElementById("search-btn");
if(myEvent!=null){
   myEvent.onclick = function(){
      let inputValue = (<HTMLInputElement>document.getElementById("searchresult")).placeholder;
      if( inputValue === "TITLE"){
          let titleName = (<HTMLInputElement>document.getElementById("searchresult")).value.toLowerCase();
          book1.searchByTitle(books,titleName);
      }else if( inputValue === "AUTHOR"){
          let authorName = (<HTMLInputElement>document.getElementById("searchresult")).value.toLowerCase();
          book1.searchByAuthor(books,authorName);
      }else if( inputValue === "ID"){
          let getID = (<HTMLInputElement>document.getElementById("searchresult")).value;
          book1.searchByID(books,parseInt(getID));
      }else if( inputValue === "MIN RATING"){
           let getRating = (<HTMLInputElement>document.getElementById("searchresult")).value;
          book1.searchByRating(books,parseInt(getRating));
      }else{
           let minPrice = (<HTMLInputElement>document.getElementById("minPrice")).value;
           let maxPrice = (<HTMLInputElement>document.getElementById("maxPrice")).value;
          book1.searchByPrice(books,parseInt(minPrice),parseInt(maxPrice));
      }
  }
  
}

let searchEvent=document.getElementById("search-options")
   if(searchEvent!=null){
     searchEvent.onchange=function(){
      let x=(<HTMLInputElement>document.getElementById("search-options")).value;
      if (x === "ID"){
         (<HTMLInputElement>document.getElementById("searchresult")).placeholder = x;
      }else if(x === "TITLE"){
         (<HTMLInputElement>document.getElementById("searchresult")).placeholder = x;   
      }else if(x === 'AUTHOR'){
         (<HTMLInputElement>document.getElementById("searchresult")).placeholder = x;   
      }else if(x === 'MIN RATING'){
         (<HTMLInputElement>document.getElementById("searchresult")).placeholder = x;   
      }else if(x === 'Price'){
         (<HTMLInputElement>document.getElementById("searchresult")).style.display = "none"; 
         (<HTMLInputElement>document.getElementById("minPrice")).style.display = "block";
         (<HTMLInputElement>document.getElementById("maxPrice")).style.display = "block";
      }
   } 
}