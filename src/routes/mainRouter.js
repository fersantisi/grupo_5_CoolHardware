// Este enrutador nos redirige a todas las rutas para el usuario comun 
const express = require('express');
const router = express.Router();
const mainController = require("../controllers/mainController");
const productRouter = require("./productRouter");
const userRouter = require("./userRouter")
const adminRouter = require("./adminRouter")
const apiRouter = require('../api/apiRouter')
const adminSessionMiddleware = require('../middlewares/adminSessionMiddleware')

router.get("/", mainController.home);
router.get("/cart", mainController.carrito);

router.use("/products",productRouter);
router.use("/user",userRouter);
router.use("/admin", adminSessionMiddleware,adminRouter);
router.use("/apis",apiRouter);

module.exports = router;