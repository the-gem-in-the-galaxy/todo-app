const express=require('express');
const router=express.Router();
const db=require('../config/mongoose');
const Todo=require('../model/task');

// console.log("Router loaded");
const homeController=require('../controllers/home_controller');

// get request / gets routed routed here
router.get('/',homeController(Todo).home);

// post request /create-task routed here
router.post('/create-task',function(req,res){
    Todo.create({
        desc:req.body.desc,
        category:req.body.category,
        duedate:req.body.duedate
    },function(err,newTodo){
        if(err){
            console.log('error in creating todo task');
            return;
        }
        console.log('***',newTodo);
        return res.redirect('back');
    });
});

// post request /delete-task routed here
router.post('/delete-task',function(req,res){
    console.log("req.body.checked",req.body.checked);
    var array1=[];
    var array2=array1.concat(req.body.checked);
    array2.forEach(function(ele){
        console.log(ele);   // each _id of all checked checkboxes obtained
        //find the task in database using _id and delete it
        Todo.findByIdAndDelete(ele,function(err){
            if(err){
                console.log("error in deleting an obj from db");
                return;
            }
        })
    })
    return res.redirect('back');
});

module.exports=router;