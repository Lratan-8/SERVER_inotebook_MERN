// we require mongoose and mongoDb URI
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://luvrtn2022:He11o-W0rld@cluster0.rjfblyg.mongodb.net/test';

//we will now create a function to establish our connection with MongoDb

const connectToMongo = async () =>{
    //mongoose.connect is a function given by mongoose to connect with MongoDB.                                                          Instead of this callback function inside mongoose.connect,   we can also use await.
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
};


//we have to export this function to use it
module.exports = connectToMongo

