const express =  require("express");
const db = require('./db')

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


port = 3000;
app.listen(port, () => {
    console.log(`Server running on : ${port}`)
});

// adding comment for testing