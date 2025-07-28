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

import express from 'express';

const app = express();
const port = 3000;

app.get('/:product/:day/:month/:year', (req, res) => {
    const {product, day, month, year} = req.params;
    res.send(`<h1>product ${product} was ordered on ${day}/${month}/${year}</h1>`);
})

app.listen(port, ()=>{console.log("Server Up babby!")})