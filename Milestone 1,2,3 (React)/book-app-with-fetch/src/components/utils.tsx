const fetchData = () =>{
    let data:any = localStorage.getItem('data')
    data = JSON.parse(data);
    return data
}
const SearchById=(id:any)=>{    
    // let data = fetchData();
    // let result=data.filter((book:any)=>book.id===id)
    // return result;
    let result;
    fetch(`http://localhost:9000/books/${id}`)
    .then(res=>res.json())
    .then(json=> {
        console.log(json);
        result = json;
    })
    return [result];
}
const searchByTitle=(title:any)=>{
    // let data = fetchData();
    // let result = data.filter((book:any)=>book.title === title);
    // return result;
}
const searchByAuthor=(author:any)=>{
    // let data = fetchData();
    // let result = data.filter((book:any)=>book.author === author);
    // return result;
    // let result;
    // fetch(`http://localhost:9000/books/${id}`)
    // .then(res=>res.json())
    // .then(json=> {
    //     console.log(json);
    //     result = json;
    // })
    // return [result];
}
const searchByRating=(rating:any)=>{
    let data = fetchData();
    let result = data.filter((book:any)=>book.rating > rating);
    return result;
}
const searchByPriceRange=(minPrice:any,maxPrice:any)=>{
    let data = fetchData();
    let minvalue = parseInt(minPrice);
    let maxvalue = parseInt(maxPrice);
    let result = data.filter((book:any)=>{
        return parseInt(book.price) > minvalue && parseInt(book.price) < maxvalue;
    })
    return result;
}
const deleteBook=(id:any)=>{
    let data = fetchData();
    let result= data.filter((book:any)=> book.id !== id)
    localStorage.setItem('data',JSON.stringify(result));
}


export { fetchData , SearchById, searchByTitle, searchByAuthor, searchByRating, searchByPriceRange,deleteBook }