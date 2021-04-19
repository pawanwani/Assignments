import express from "express";
const router = express.Router();
import book from '../models/books';

router.get("/",async(req,res)=>{
    if(req.query.title){
        try {
            const books = await book.find({title:req.query.title});
            res.send(books);
        } catch (error) {
            res.end("Error:"+error);
        }
    }else if(req.query.author){
        try {
            const books = await book.find({author:req.query.author});
            res.send(books);
        } catch (error) {
            res.end("Error:"+error);
        }
    }else if(req.query.q){
        try {
            const books = await book.find({$or:[{title:req.query.q},{author:req.query.q},{description:req.query.q}]});
            res.send(books);
        } catch (error) {
            res.end("Error:"+error);
        }
    }else if(req.query["price"]){
        try{
            let array:any = req.query["price"];
            const books = await book.find(
            {$and:
                [
                    {price:{$gte:array[0]}},
                    {price:{$lte:array[1]}}
                ]
            });
            res.send(books);
        }catch(error){
            res.end("Error:"+error);
        }
    }else{
        try {
            const books = await book.find();
            res.send(books);
        } catch (error) {
            res.end("Error:"+error);
        }
    }
    
    
});
router.get("/:id",async(req,res)=>{
    try {
        const books = await book.findById(req.params.id);
        res.send(books);
    } catch (error) {

        res.end("Error:"+error);
    }
    
});

router.post("/",async(req,res)=>{
    const bk = new book({
        title: req.body.title,
        author: req.body.author,
        pages: req.body.pages,
        price:req.body.price,
        rating:req.body.rating,
        votes:req.body.votes,
        description:req.body.description,
        tags:req.body.tags,
        series:req.body.series,
        seriesIndex:req.body.seriesIndex,
        releaseDate:req.body.releaseDate,
        cover:req.body.cover
    })
    try{
        const b1 = await bk.save()
        res.send(b1);
    }catch(error){
        res.send("Error: " + error);
    }
});

router.put("/:id",async(req,res)=>{
    try {
        const bookRecord:any = await book.findById(req.params.id);
        const bk = new book({
            _id: bookRecord._id,
            title: req.body.title || bookRecord.title,
            author: req.body.author|| bookRecord.author,
            pages: req.body.pages || bookRecord.pages,
            price:req.body.price || bookRecord.price,
            rating:req.body.rating|| bookRecord.rating,
            votes:req.body.votes|| bookRecord.votes,
            description:req.body.description|| bookRecord.description,
            tags:req.body.tags|| bookRecord.tags,
            series:req.body.series|| bookRecord.series,
            seriesIndex:req.body.seriesIndex|| bookRecord.seriesIndex,
            releaseDate:req.body.releaseDate|| bookRecord.releaseDate,
            cover:req.body.cover|| bookRecord.cover
        })
        const UpdatedBook = await book.findByIdAndUpdate(req.params.id,bk,{new:true})
        res.send(UpdatedBook);
    } catch (error) {
        res.end("Error:"+error);
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        const books = await book.findByIdAndDelete(req.params.id)
        res.send(books);
    } catch (error) {
        res.end("Error:"+error);
    }
})

export default router;