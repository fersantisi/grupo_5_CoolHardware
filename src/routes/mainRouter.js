const express = require('express');
const router = express.Router();
const mainController = require("../controllers/mainController");
const productRouter = require("./productRouter")
const userRouter = require("./userRouter")
const adminRouter = require("./adminRouter")

router.get("/", mainController.home);
router.get("/cart", mainController.carrito);


router.use("/product",productRouter);
router.use("/user",userRouter);
router.use("/admin",adminRouter);

module.exports = router;