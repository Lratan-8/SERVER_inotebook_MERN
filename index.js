
//we will require mongoDb here because this is the entry file of our application
require('dotenv').config()
const connectToMongo = require('./config/db');
connectToMongo(); //this function is asynchronous because we made it asynchronous

//starting with the express server
const express = require('express');
const port = process.env.PORT || 5000;
var cors = require('cors')
var app = express()

app.use(cors())


//to send any data from the req.body, we will need to use a middleware
app.use(express.json());

//Available routes, 
//Note - We are not using app.get, we are using app.use BECAUSE                                                                               we have already described there type in their respective router files
//the first argument is the api end point and the second argument is the handler function
//these api end points can be further mapped inside the hanlder function
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

//this is one of the endpoint of our api, this corresponds to the homepage
app.get('/', (req, res) => {
  console.log(process.env.DATABASE)
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`inoteBook listening on port ${port}`)
});
