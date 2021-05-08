import express from "express";
const router = express.Router();
import book from '../models/books';
import { AuthenticateUser } from '../authentication/utils';

router.get("/",async(req,res)=>{
    try {
        const books = await book.find();
        res.send(books);
    } catch (error) {
        res.end("Error:"+error);
    }
});
router.get("/matching",async(req,res)=>{
    try{
        let str = ""+req.query.q;
        const books = await book.find({$or:[{title:new RegExp(str,"i")},{author:new RegExp(str,"i")},{description:new RegExp(str,"i")}]});
        res.send(books);
    }
    catch(error){
        console.log(error);
    }
});
router.get("/:id",async(req,res)=>{
    try {
        const books = await book.findById(req.params.id);
        res.send(books);
    } catch (error) {
        res.end("Error:",error);
    }
});
router.get("/by/:author",async(req,res)=>{
    try {
        let author = ""+ req.params.author;
        const books = await book.find({author: new RegExp(author,"i")});
        res.send(books);
    } catch (error) {
        res.end(error);
    }
    
});
router.get("/priced/:min/:max", async(req,res)=>{
    try {
        const books = await book.find(
            {$and:
                [
                    {price:{$gte:req.params.min}},
                    {price:{$lte:req.params.max}}
                ]
            });
            res.send(books);
    }catch(error){
        res.send(error);
    }
});
router.get("/with-min-rating/:rating",async(req,res)=>{
    try{
        const books = await book.find({rating:{$gte:req.params.rating}})
        res.send(books);
    }catch(error){
        res.send(error);
    }
});

router.post("/",AuthenticateUser,async(req,res)=>{
    
    const bk = new book({
        title: req.body.title,
        author: req.body.author,
        price:req.body.price,
        rating:req.body.rating,
        description:req.body.description,
        cover:req.body.cover
    })
    try{
        const b1 = await bk.save()
        res.send(b1);
    }catch(error){
        res.send("Error: " + error);
    }
});

router.patch("/:id",AuthenticateUser,async(req,res)=>{
    try {
        const bookRecord:any = await book.findById(req.params.id);
        const bk = new book({
            _id: bookRecord._id,
            title: req.body.title || bookRecord.title,
            author: req.body.author|| bookRecord.author,
            price:req.body.price || bookRecord.price,
            rating:req.body.rating|| bookRecord.rating,
            description:req.body.description|| bookRecord.description,
            cover:req.body.cover|| bookRecord.cover
        })
        const UpdatedBook = await book.findByIdAndUpdate(req.params.id,bk,{new:true})
        res.send(UpdatedBook);
    } catch (error) {
        res.end("Error:"+error);
    }
})

router.delete("/:id",AuthenticateUser,async(req,res)=>{
    try {
        const books = await book.findByIdAndDelete(req.params.id)
        res.send(books);
    } catch (error) {
        res.end("Error:"+error);
    }
})

export default router;