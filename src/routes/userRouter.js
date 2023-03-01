const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");
const multer = require('multer');
const path = require('path');
const registerValidations = require('../middlewares/validatorRegisterMiddleware');
const loginValidations = require('../middlewares/validatorLoginMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware')


const storage = multer.diskStorage({ 
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/users')); 
    }, 
    filename: function (req, file, cb) { 
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    } 
})


const upload = multer({storage: storage});

//Singing up 
router.get("/login/", guestMiddleware, userController.login);
router.post("/login/", loginValidations, userController.loginProcess);

//Create User
router.get("/register/", guestMiddleware, userController.register); 
router.post("/register/", upload.single('avatar'), registerValidations, userController.store);

//Profile User
router.get("/userProfile/:id/", userController.userProfile);
router.get("/userProfile/edit/:id/", userController.editProfile);
router.put('/userProfile/edit/:id/', userController.updateProfile);
// router.post("/userProfile/", userController.store);

//Logout
router.get("/logout/", userController.logout)


//ShowUser
// router.get("/listadoUsers/",userController.listado)


module.exports = router;