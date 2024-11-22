const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/hotels";

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
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