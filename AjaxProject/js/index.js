document.getElementById("feed-data").addEventListener('click',loadtext);
function loadtext(){
    fetch('../views/addbook.html')
.then((response)=>{
	return response.text();
}).then((html)=>{
    document.getElementById("data").innerHTML = html;
    let addData=document.getElementById("addData");
    if(addData!=null){
        addData.onclick= function(){
            fetch("http://localhost:3000/books", {
                method: "POST",
                body: JSON.stringify({
                    id: document.getElementById('id').value,
                    title:document.getElementById('title').value,
                    author:document.getElementById('author-name').value,
                    price:document.getElementById('price').value,
                    rating:document.getElementById('rating').value,
                    description:document.getElementById('description').value
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            
            .then(json => console.log(json));
        }
    }

}).catch((err)=>{
	console.log('Something went wrong.', err);
}); 
}

fetch('../views/showlist.html')
.then((response)=>{
	return response.text();
}).then((html)=>{
    document.getElementById("data").innerHTML = html;
    let myEvent=document.getElementById("search-btn");
        myEvent.onclick = function(){
            let inputValue = document.getElementById("searchresult").placeholder;
            if( inputValue === "Title"){
                searchByTitle(document.getElementById("searchresult").value);
            }else if( inputValue === "Author"){
                searchByAuthor(document.getElementById("searchresult").value);
            }else if( inputValue === "id"){
                searchByID(document.getElementById("searchresult").value);
            }else if( inputValue === "Rating"){
                searchByRating(document.getElementById("searchresult").value);
            } 
        }
}).catch((err)=>{
	console.log('Something went wrong.', err);
});  

fetch('http://localhost:3000/books')
.then( (res)=>{
    return res.json();
})
.then((data)=>{
    display(data);
    
})
.catch((error)=>{
    console.log(error);
});
function myFunction(){
    let x=document.getElementById("search-options").value;
    if(x === "Title"){
        document.getElementById("searchresult").placeholder = x;   
    }else if(x === 'Author'){
        document.getElementById("searchresult").placeholder = x;   
    }else if(x === 'Rating'){
        document.getElementById("searchresult").placeholder = x;
    }else if(x === 'id'){
        document.getElementById('searchresult').placeholder = x;
    }
}
function searchByTitle(title){
    customURI = `http://localhost:3000/books?title=${title}`
    fetch(customURI)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        let tb=document.getElementById("tableData");
        let tr = tb.getElementsByTagName('tr');
        removeAllrows(tr);
        display(data);
    })
    .catch((error)=>{
        console.log(error);
    })

}
function searchByID(id){
    customURI = `http://localhost:3000/books/?id=${id}`
    fetch(customURI)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        let tb=document.getElementById("tableData");
        let tr = tb.getElementsByTagName('tr');
        removeAllrows(tr);
        display(data);
    })
    .catch((error)=>{
        console.log(error);
    })
}
function searchByAuthor(author){
    customURI = `http://localhost:3000/books?author=${author}`
    fetch(customURI)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        let tb=document.getElementById("tableData");
        let tr = tb.getElementsByTagName('tr');
        removeAllrows(tr);
        display(data);
    })
    .catch((error)=>{
        console.log(error);
    })
}
function searchByRating(rating){
    customURI = `http://localhost:3000/books?rating:>${rating}`
    console.log(customURI);
    fetch(customURI)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        let tb=document.getElementById("tableData");
        let tr = tb.getElementsByTagName('tr');
        removeAllrows(tr);
         display(data);

        
    })
    .catch((error)=>{
        console.log(error);
    })
}
function removeAllrows(row){
    for(let i=0;i<row.length;i++){
        row[i].style.display = "none";
    }
}
function deleteRecord(id){
    deleteurl = `http://localhost:3000/books/${id}`;
    console.log(deleteurl);
    fetch(deleteurl, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
    })
    .then(response => response.json())
            
    .then(data => console.log(data))
    
}
function display(data){
    data.forEach(element => {
        var row = `<tr>
                        <td>
                            ${element.title}
                        </td>
                        <td>
                            ${element.author}
                        </td>
                        <td>
                            <star-rating rating="${element.rating}" maxrating="5"></star-rating>
                        </td>
                        <td>
                            ${element.price}
                        </td>
                        <td>
                            <input type="button" value="Delete" onclick="deleteRecord(${element.id})" class="btn btn-dark"></input>
                        </td>
                   </tr>`
        document.getElementById('tableData').innerHTML +=row;
        
    });
} 

const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="./css/starComponent.css">
<div class="rating-stars">
    <div class="stars-outer">
        <div class="stars-inner"></div>
    </div>
</div>
`



class starRating extends HTMLElement{
    constructor(){
        super();
        const shadowRoot=this.attachShadow({mode:'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
        let rating= this.getAttribute('rating');
        let maxRating = this.getAttribute('maxrating');
        const starPercentage = ( parseFloat(rating) / parseInt(maxRating)) * 100;
        const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
        shadowRoot.querySelector(".stars-inner").style.width = starPercentageRounded;
    }
}
window.customElements.define('star-rating',starRating);