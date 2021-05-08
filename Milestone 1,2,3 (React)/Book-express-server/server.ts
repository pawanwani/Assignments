import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser"
import env from "dotenv";
env.config();
import bookRouter from'./Routers/bookRoutes';
import userRouter from './Routers/userRoutes';
const app = express();
//const url = `mongodb://localhost:/${process.env.database}`
const url = `mongodb+srv://${process.env.username}:${process.env.password}@mycluster.s83ac.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority` 

app.use(express.json());
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));

db.on('open',()=>{
    console.log("connection establised successfully");
}) 

app.use(function(req,res,next){
    res.header("Access-control-Allow-Origin","*");
    res.header("Access-Control-Allow-headers","Origin,X-Requested-With,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","GET,POST,DELETE,PUT");
    next();
})

app.use('/books',bookRouter);
app.use('/users',userRouter);
app.listen(process.env.port,()=>{
    console.log(`server live on ${process.env.port}`)
})

