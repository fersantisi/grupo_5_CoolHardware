const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController");
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/products')); 
    }, 
    filename: function (req, file, cb) { 
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))  
    } 
})
const upload = multer({storage: storage});


router.get("/list", productController.list)
router.get("/detail/:id/", productController.productos);

router.post("/detail", upload.single('avatar'),productController.store);


module.exports = router;