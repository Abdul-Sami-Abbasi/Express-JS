//create folder
//npm init -y
//npm install express
//create instance express
//provode port : 3000
//basic route '/'
//regex route in get
// nested route in get
// passing multiple call backs in get (through next parameter/function) and Array of Callbacks
//postman test
//app.route()
//router (modular routinng)

import express from 'express';
const app = express();
const port = 3000;

 
app.route('/student')
.get((req, res) => res.send("Gives All Student"))
.post((req, res) => res.send("Add New Student"))
.put((req, res) => res.send(`Gives Student`))
.delete((req, res) => res.send("Delete Student"));

app.listen(port, ()=>{console.log("Server Up babby!")})