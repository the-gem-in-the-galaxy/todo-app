const express=require('express');
const port=8000;

const app=express();

//setting up template engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded());  //parsing form data
app.use(express.static('assets'));  //for accessing static files

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(!err)
        console.log("Server is up and running at port",port);
    else
        console.log("Error in running server",err);
});