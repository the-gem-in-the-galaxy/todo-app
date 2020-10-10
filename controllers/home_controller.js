const Todo = require("../model/task");

module.exports = function (Todo) {
    var module = {};
    module.home= function(req,res){
        // fetching data from database
        Todo.find({},function(err,tasks){
            if(err){
                console.log('Error in fetching contacts from db');
                return;
            }
            return res.render('home',{
                title:"To do App",
                task_list: tasks,
            });
        })
    }
    return module;
};