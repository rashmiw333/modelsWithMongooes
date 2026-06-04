const mongooes = require("mongoose");

const noteSchema = new mongooes.Schema({
    title:{
        type: String,
        required:true
    },
    content:{
        type:String
    },
    category:{
        type:String,
        enum:['Personal', 'Work', 'Study', 'Ideas', 'Journal', 'Other']
    },
    tags:{
        type: String
    }

},{timeStamps:true},
);

const Note =  mongoose.model("Note",noteSchema);

module.exports = Note;