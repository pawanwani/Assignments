import express from "express";
const router = express.Router();
import user from '../models/users';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { findEmail } from '../authentication/utils';


router.post("/register", async(req,res)=>{
    try{  
        let addUser : any;
        let {name, email, password} = req.body;
        if((await findEmail(email,res))===true){
            let newUser:any = new user();
            bcrypt.hash(password,9, async(err,hash)=>{
                if(err){
                    console.log(err);
                    return false;
                }
                password = hash;
                newUser = { name , email , password };
                addUser = await user.create(newUser);
                res.status(201).send(addUser);
            })

        }else{
            res.status(409).end("Email id already exists, try to login")
        }
       
    }catch(error){
        res.status(406).send(error.message);
    }
})

router.post("/login",async(req,res)=>{
    try {
        let { email , password } = req.body;
        let User:any = await findEmail(email,res);
        if(User){
            let passwordMatch = await bcrypt.compare(password,User.password);
            if(passwordMatch){
                const token = jwt.sign(
                    {userId : User._id},
                    `${process.env.JWTstring}`,
                    {expiresIn:"1d"}
                );
                res.status(200).send({"token":token});
            }else{
                res.end("Password is Incorrect");
            }
        }else{
            res.status(404).end("User not Found,Please Try to LogIN")
        }
    } catch (error) {
        res.status(404).send(error);
    }
})

export default router;