//create folder
//npm init -y
//npm install express
//create instance express
//provode port : 3000
//basic route '/'

import express from 'express'

const app = express()

app.get('/', (req, res)=>{res.send('<h1>Home</h1>')})
app.get('/about', (req,res)=>{res.send('<h1>About</h1>')})
app.get('/contact', (req, res) =>{res.send('<h1>Contact us</h1>')})

//regex route
app.get(/^\/users\/[0-9]{4}$/, (req, res)=>{res.send('This will run if the path contain users/1234 or any 4 digit number')})

//nested route
app.get('/products/iphone', (req, res)=>{res.send('This will only run if the Route is products/iphone')})
app.listen(3000, ()=>{console.log("Server Up babby!")})