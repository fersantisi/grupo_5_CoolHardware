const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRouter");
const methodOverride = require('method-override');
var cookieParser = require('cookie-parser')
const session = require('express-session')
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
const remindMeMiddleware = require("./middlewares/remindMeMiddleware");
const { sequelize } = require("../src/database/models");
const cors = require('cors');


const PORT = 3030

app.listen(PORT, console.log('Listening on port ' + PORT + " --> http://localhost:" + PORT));


sequelize.authenticate()
    .then(() => {
        console.log('CONEXION A LA DB OKK!')
    })
    .catch(error => {
        console.log('EL ERROR DE CONEXION ES: ' + error);
    })
    
app.use(session({ secret: 'Secret', resave: false, saveUninitialized: false }))

app.use(cookieParser());

app.use(remindMeMiddleware)

app.use(userLoggedMiddleware)

app.use(express.static('public'));
app.set('views', './src/views');

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(methodOverride('_method'));

app.use(cors())


app.set("view engine", "ejs");
app.use("/", mainRouter);






