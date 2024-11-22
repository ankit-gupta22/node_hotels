const express =  require("express");
const db = require('./db')
require('dotenv').config();

const PORT = process.env.PORT;

const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());


app.get('/', (req,res) =>{
    res.send("Welcome to our hotel");
});

const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');


app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);



app.listen(PORT, () => {
    console.log(`Server running on : ${PORT}`)
});

// adding comment for testing

// second comment for testing