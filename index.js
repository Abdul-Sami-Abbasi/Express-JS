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

app.param('id', (req, res, next, id) => {
    console.log(`ID: ${id}`);

    if(isNaN(id)) {
        return res.status(400).send('ID must be a number');
    }
    req.id = id;
    next();
    })

app.get('/users/:id', (req, res) => {
    res.send(`User ID: ${req.id}`);
});

app.listen(port, ()=>{console.log("Server Up babby!")})