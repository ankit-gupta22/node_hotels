const mongoose = require("mongoose");
require('dotenv').config();


// const mongoURL = process.env.MONGODB_URL_LOCAL;

const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log("Connected to MongoDB");
});

db.on('error', (err) =>{
    console.log("Error connecting to MongoDB : ",err);
});

db.on('disconnected',() => {
    console.log("connection disconnected");
});

module.exports = db;