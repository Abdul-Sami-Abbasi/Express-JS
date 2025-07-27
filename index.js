//create folder
//npm init -y
//npm install express
//create instance express
//provode port : 3000
//basic route '/'
//regex route in get
// nested route in get
// passing multiple call backs in get (through next parameter/function) and Array of Callbacks

import express from 'express';
const app = express();
const port = 3000;

const cb1 = (req, res, next)=>{
    console.log('First Calllback!')
    next();
}
const cb2 = (req, res, next)=>{
    console.log('Second Calllback!')
    next();
}
const cb3 = (req, res)=>{
    res.send('<h1>Third Calllback!<h1/>')
}
 
app.get('/', [cb1, cb2, cb3])

app.listen(port, ()=>{console.log("Server Up babby!")})