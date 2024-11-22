const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    age : {
        type : Number,

    },
    work : {
        type : String,
        required : true,
        enum : ['chef','waiter','manager']
    },

    mobile:{
        type : String,
        required : true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    address:{
        type:String
    },

    salary:{
        type:Number,
        required:true
    }

});

const Person = mongoose.model('Person', personSchema);
module.exports = Person;


// {
//     "name": "John",
//     "age": 25,
//     "work": "chef",
//     "mobile": "1234567890",
//     "email": "john@gmail.com",
//     "address": "123 Main St, City",
//     "salary": 50000

// }