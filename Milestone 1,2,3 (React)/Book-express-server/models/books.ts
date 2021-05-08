import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
    title:{
        type: String
    },
    author:{
        type: String
    },
    price:{
        type:String
    },
    rating:{
        type:String,
        max:5
    },
    description:{
        type:String
    },
    cover:{
        type:String
    }
})
   const dbSchema = mongoose.model('books',bookSchema);
   export default dbSchema;
