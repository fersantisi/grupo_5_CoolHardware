const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRouter");
const methodOverride =  require('method-override');
const session = require('express-session')
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')

const PORT = 3030

app.listen(PORT, console.log('Listening on port ' + PORT + " --> http://localhost:" + PORT));

app.use(session({secret: 'Secret', resave: false, saveUninitialized: false}))

app.use(userLoggedMiddleware)

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(methodOverride('_method'));

app.set("view engine", "ejs");

app.use("/", mainRouter);

