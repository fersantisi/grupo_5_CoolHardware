const express = require("express");
const app = express();
const path = require("path");

const PORT = 3030


app.listen(PORT, console.log('sv corriendo en el puerto ' + PORT));

app.use(express.static('public'));

app.get("/",(req, res) =>{
    console.log('Entre al home');
    res.sendFile(path.resolve('./views/index.html'));
    
});

