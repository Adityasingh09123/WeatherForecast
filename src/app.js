const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;

// public static path
const template_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");

const staticPath = path.join(__dirname,"../public");
console.log(staticPath)

app.set('view engine','hbs');
app.use(express.static(staticPath));

app.set('views',template_path);
hbs.registerPartials(partial_path);

//Routing
app.get("/",(req,res)=>{
    res.render('index');
})
app.get("/about",(req,res)=>{
    res.render('about');
})
app.get("/weather",(req,res)=>{
    res.render('weather');
})
app.get("*",(req,res)=>{
    res.render('404Error');
})

app.listen(port,()=>{
    console.log(`Server is running at port 8000`);
})
