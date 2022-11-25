const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRouter");

const PORT = 3030

app.listen(PORT, console.log('sv corriendo en el puerto ' + PORT + "  http://localhost:3030"));

app.use(express.static('public'));

app.set("view engine", "ejs");

app.use("/", mainRouter);

