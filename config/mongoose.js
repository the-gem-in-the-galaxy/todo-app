const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/todo-db');
// acquire connection to check if successful
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error connecting to db'));
db.once('open',function(){
    console.log('Successfully connecting to db');
});
