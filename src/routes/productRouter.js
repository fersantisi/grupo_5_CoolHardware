// Esta ruta redirige a los a los usuarios al detalle de producto y lista de producto
const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/list", productController.list)
router.get("/detail/:id/", productController.productos);



module.exports = router;