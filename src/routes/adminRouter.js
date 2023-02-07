const express = require('express');
const router = express.Router();
const adminController = require("../controllers/adminController");
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

router.post("/createProduct", upload.single('avatar'), adminController.store);
router.get("/userAdmin", adminController.users);

router.get('/', adminController.admin)
router.get('/list', adminController.list)

router.get('/manageProduct/:id', adminController.manage);
router.get('/manageProduct/edit/:id', adminController.edit);
router.put('/manageProduct/edit/:id', upload.single('avatar'), adminController.update);
router.delete('/manageProduct/delete/:id', adminController.destroyProduct);
router.delete('/userAdmin/delete/:id', adminController.destroyUser);
router.get("/createProduct", adminController.create);








module.exports = router;