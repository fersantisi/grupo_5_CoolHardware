const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController")


router.get("/productDetail/:id", productController.productos);


module.exports = router;