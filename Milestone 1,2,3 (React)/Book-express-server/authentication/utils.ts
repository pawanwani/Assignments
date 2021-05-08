import user from '../models/users';
import jwt from 'jsonwebtoken';
import book from '../models/books';


async function findEmail(email:string,res:any) {
    try {
        const userEmail = await user.findOne({ email });
        if(userEmail){
            return userEmail
        }else{
            return true;
        }
    } catch (error) {
        res.send(error.message);
    }    
}

async function AuthenticateUser(req:any,res:any,next:Function){
    try{
        if(req.headers && req.headers.authorization){
            const token = req.headers.authorization;
            const decode:any = jwt.verify(token,`${process.env.JWTstring}`);
            const User = await user.findById(decode.userId); 
            try{
                if(!User){
                    return res.send({
                        success: false,
                        message: "Unauthorized Access"
                    });
                }
                req.User = User;
                next();
            }catch(error){
                if(error.name === "JsonWebTokenError"){
                    return res.send({
                        success:false,
                        message:"Unauthorized Access"
                    });
                }
                if(error.name === "TokenExpiredError"){
                    return res.send({
                        success:false,
                        message:"Session Expried do login again"
                    });
                }
                return res.send({
                    success: false,
                    message: "Couldn't Login try Again"
                });
            }
        }
    }catch(error){
        res.status(404).send(error.message);
    }
}



export { findEmail, AuthenticateUser }