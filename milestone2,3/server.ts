import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser"
import env from "dotenv";
env.config();
import bookRouter from'./Routers/bookRoutes';

const app = express();
const url = `mongodb://localhost:/${process.env.database}`

app.use(bodyParser.json());
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));

db.on('open',()=>{
    console.log("connection establised successfully");
}) 


app.use('/books',bookRouter);

app.listen(process.env.port,()=>{
    console.log(`server live on ${process.env.port}`)
})

