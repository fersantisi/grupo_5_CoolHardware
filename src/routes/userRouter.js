const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");
const multer = require('multer');
const path = require('path');
const validations = require('../middlewares/validatorMiddleware');
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

router.get("/login/", guestMiddleware, userController.login);
router.post("/login/", userController.loginProcess);
router.get("/register/", guestMiddleware, userController.register); 
router.post("/register/", upload.single('avatar'), validations, userController.store);

router.get("/logout/", userController.logout)



module.exports = router;