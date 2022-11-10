const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRouter");

const PORT = 3030


app.listen(PORT, console.log('sv corriendo en el puerto ' + PORT));

app.use(express.static('public'));

app.use("/", mainRouter);

app.get("/login", mainRouter);

app.get("/productCart", mainRouter);

app.get("/productDetail", mainRouter);

app.get("/register", mainRouter);

