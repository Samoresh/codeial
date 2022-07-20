const express= require('express');
const app= express();
const port= 8000;
const expressLayouts= require('express-ejs-layouts');
const db= require('./config/mongoose');
const bodyParser= require('body-parser');
const cookieParser= require('cookie-parser');

app.use(express.static('./assets'));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
//extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
//use express router
app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views','./views');

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});