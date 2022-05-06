const express = require('express'); //Part #1 Point 1 -->npm i express
const path = require ('path'); 
const cors = require('cors');


const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter');// Part #1 Point 3 -->path name incorrect. homerouter should be used instead of homeroute
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express; 
app.use(cors())                              //  Part #2 Point 7

app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(express.urlencoded({extended:true}));//Part #1 Point 2 --> use express instead of bodyParser
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});

 


app.listen(process.env.PORT || 5000,()=>{
    console.log("Server Ready on 5000");// Part #1 Point 5-->server ready on 5000
});
