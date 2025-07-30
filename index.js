//create folder
//npm init -y
//npm install express
//create instance express
//provode port : 3000
//basic route '/'
//regex route in get
// nested route in get
// passing multiple call backs in get (through next parameter/function) and Array of Callbacks
// postman test
// app.route()
// router (modular routinng)
// Route Parameters
// app.param()
//Controllers
//Query Strings
// sending JSON response(backend to frontend)
// middlewares

import express from 'express';
const app = express();
const port = 3000;


app.get("/", (req, res)=>{
    res.send("<h1>Hello World!<h1/>");
});

app.get("/about", (req, res)=>{
    res.send("<h1>Hello About Section!<h1/>");
});

app.get("/contact", (req, res)=>{
    res.send("<h1>Hello Contact Section<h1/>");
});

app.listen(port, ()=>{console.log("Server Up babby!")})