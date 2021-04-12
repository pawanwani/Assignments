const fetch = require('node-fetch');
async function ajaxGet (link,cb){
    try{
        let res = await fetch(link);
        if(res.ok){
            let json = await res.json()
            cb(null,json);
        }else{
            cb(res.status)
        }
    }catch (error){
        cb(error)
    }
}

ajaxGet('http://localhost:3000/books',(error,books)=>{
    if(error){
        console.log("Error:StatusCode",error);
    }else{
        console.log(books)
    }
})
 