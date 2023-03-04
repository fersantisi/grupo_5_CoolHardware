// Enrutador de administracion 

const express = require('express');
const router = express.Router();
const adminController = require("../controllers/adminController");
const multer = require('multer');
const path = require('path');
const productValidations = require('../middlewares/validatorProductsMiddleware');

// Funcion nativa de multer para redireccionar la imagen y cambiarle el nombre al archivo 
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/products')); 
    }, 
    filename: function (req, file, cb) { 
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))  
    } 
})
const upload = multer({storage: storage});

// Ruta principal del admin
router.get('/', adminController.admin)
router.get('/list', adminController.list)
router.get('/list/search/', adminController.search)


// Ruta de Creacion de productos 
router.post("/createProduct", upload.single('avatar'), productValidations, adminController.store);
router.get("/createProduct", adminController.create);

// Ruta de modifciacion y eliminacion de productos
router.get('/manageProduct/:id/', adminController.manage);
router.get('/manageProduct/edit/:id/', adminController.edit);
router.put('/manageProduct/edit/:id/', upload.single('avatar'), adminController.update);
router.delete('/manageProduct/delete/:id/', adminController.destroyProduct);


// Ruta de modificacion y eliminacion de usuarios
router.get("/userAdmin", adminController.users);
router.delete('/userAdmin/delete/:id/', adminController.destroyUser);
router.put("/userAdmin/updateAdmin/:id/", adminController.updateAdmin);







module.exports = router;