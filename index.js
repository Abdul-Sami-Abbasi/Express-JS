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

import express from 'express';
import products from './products.js';
const app = express();
const port = 3000;

app.get("/products", (req, res)=>{
    res.json(products)
});

app.listen(port, ()=>{console.log("Server Up babby!")})