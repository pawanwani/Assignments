import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
    title:{
        type: String
    },
    author:{
        type: String
    },
    pages:{
        type: Number
    },
    price:{
        type:Number
    },
    rating:{
        type: Number,
        max:5
    },
    votes:{
        type:Number
    },
    description:{
        type:String
    },
    tags:{
        type:Array
    },
    series:{
        type: String
    },
    seriesIndex:{
        type:Number
    },
    releaseDate:{
        type:Date
    },
    cover:{
        type:String
    }
})
   const dbSchema = mongoose.model('Books',bookSchema);
   export default dbSchema;
