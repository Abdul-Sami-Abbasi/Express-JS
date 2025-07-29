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

import express from 'express';
const app = express();
const port = 3000;

app.get("/product", (req, res)=>{
    res.send("Products Page:", req.query.category
        
    );
})

app.listen(port, ()=>{console.log("Server Up babby!")})