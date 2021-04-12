export class Book{
    
    id:Number;
    title:String;
    author:String;
    price:Number;
    rating: Number;
    description:String;

    constructor(id:Number,title:String,author:String,price:Number,rating: Number,description:string){
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.rating = rating;
        this.description = description;
    }

}
