const mongooes = require("mongoose");

const booksSchema = new mongooes.Schema({
    title:{
        type: String,
        required:true
    },
    author:{
        type: String,
        required:true
    },
    publishedYear :{
         type: Number,
        required:true
    },
    genre:{
        type:String,
        enum:[ 'Fiction', 'Non-Fiction', 'Mystery', 'Thriller', 'Science Fiction', 'Fantasy', 'Romance', 'Historical', 'Biography', 'Self-help',]
    },
    language :{
        type: String,
        required:true
    },
    country:{
        type: String,
        default:'United States'
    },
    rating :{
        type:Number,
        min:0,
        max:10,
        default:0,
    },
    summary :{
        type: String
    },
    coverImageUrl :{
        type: String
    }

},{timeStamps:true},
);

const Books = new mongoose.model("Books",booksSchema);

module.exports = Books;