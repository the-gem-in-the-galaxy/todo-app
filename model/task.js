const mongoose=require('mongoose');
// populating the database
const todoSchema=new mongoose.Schema({
    desc:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    duedate:{
        type:String,
        required:true
    }
});

const Todo=mongoose.model('Todo',todoSchema);
module.exports=Todo;