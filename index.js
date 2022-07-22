const express= require('express');
const app= express();
const port= 8000;
const expressLayouts= require('express-ejs-layouts');
const db= require('./config/mongoose');
const bodyParser= require('body-parser');
// const cookieParser= require('cookie-parser');
//used for session cookie
const session= require('express-session');
const passport= require('passport');
const passportLocal= require('./config/passport-local-strategy');
const MongoStore= require('connect-mongo');


app.use(express.static('./assets'));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended: false}));
// app.use(cookieParser());//cookie-parser no longer required for module express-session
//extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


app.set('view engine','ejs');
app.set('views','./views');

//mongo store is used to store the session cookie in the db
app.use(session({
    name: 'codeial',
    //TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge: (1000 * 60 * 60)
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/codeial_development',
        autoRemove: 'disabled'

        },function(err){
        console.log(err || 'connect-mongodb setup ok');
        }
    )
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

//use express router
app.use('/',require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});