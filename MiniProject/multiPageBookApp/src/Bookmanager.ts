import { Book } from "./Book";
export class BookManager{
    addBooks(){
    let book ={
        id: (<HTMLInputElement>document.getElementById("id")).value,
        title: (<HTMLInputElement>document.getElementById("title")).value,
        author: (<HTMLInputElement>document.getElementById("author-name")).value,
        price: (<HTMLInputElement>document.getElementById("price")).value,
        rating: (<HTMLInputElement>document.getElementById("rating")).value,
        description: (<HTMLInputElement>document.getElementById("description")).value
    }
    if(localStorage.getItem('data') == null){
        localStorage.setItem('data','[]');
    }
    let old_data = JSON.parse(localStorage.getItem('data'));
    old_data.push(book);
    localStorage.setItem('data',JSON.stringify(old_data));        
    }    
    displayBooks(books){
        this.removerows(books);
        let table =document.getElementById("myTable")
        for( let i=0 ; i<books.length;i++){
            let row = `<tr>
                            <td>${books[i].id}</td>
                            <td>${books[i].title}</td>
                            <td>${books[i].author}</td>
                            <td>${books[i].rating}</td>
                            <td>${books[i].price}</td>
                            <td>
                                <input type="button" class="row" value="Delete" onclick="app.deleterow(${books[i].id})"></input>
                            </td>
                    </tr>`
            table.innerHTML += row    
            
        }
    }
    
    searchByPrice(books:Book[],minPrice:number,maxPrice:number){
        let mytbl = document.getElementById("myTable");
        let tr = mytbl.getElementsByTagName('tr');
        for(let i=0;i<books.length;i++){
            if(books[i].price >=  minPrice && books[i].price <= maxPrice){
                tr[i].style.display = "";
            }
            else{
                tr[i].style.display = "none";
            }
        }
    }
    searchByAuthor(books:Book[],authorName:string){
        let mytbl = document.getElementById("myTable");
        let tr = mytbl.getElementsByTagName('tr');
        for(let i=0;i<books.length;i++){
            if((books[i].author).valueOf().toLowerCase().trim() === authorName.toLowerCase().trim()){
                tr[i].style.display = "";
                
            }
            else{
                tr[i].style.display = "none";
                
            }
        }
    }
    searchByTitle(books:Book[],BookTitle:string){
        let mytbl = document.getElementById("myTable");
        let tr = mytbl.getElementsByTagName('tr');
        for(let i=0;i<tr.length;i++){
            if((books[i].title).valueOf().toLowerCase().trim() === BookTitle.toLowerCase().trim()){
                tr[i].style.display = "";
            }
            else{
                tr[i].style.display = "none";
            }
        }
    }
    
    searchByID(books:Book[],BookId:Number){
        let mytbl = document.getElementById("myTable");
        let tr = mytbl.getElementsByTagName('tr');
        for(let i=0;i<books.length;i++){
            if(books[i].id === BookId){
                tr[i].style.display = "";
            }
            else{
                tr[i].style.display = "none";
            }

        }
    }
    searchByRating(books:Book[],rating:Number){
        let mytbl = document.getElementById("myTable");
        let tr = mytbl.getElementsByTagName('tr');
        for(let i=0;i<books.length;i++){
            if(books[i].rating > rating){
                tr[i].style.display = "";
            }
            else{
                tr[i].style.display = "none";
            }

        }
    }
    removerows(books){
        let mytbl = document.getElementById("myTable");
        let tr = mytbl.getElementsByTagName('tr');
        for(let i=0;i<books.length;i++){
            tr[i].style.display = "none";
        }   
    }
}
