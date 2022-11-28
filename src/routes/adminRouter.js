const express = require('express');
const router = express.Router();
const adminController = require("../controllers/adminController")

router.get('/', adminController.admin)

router.get("/createProduct", adminController.create);
router.post("/createProduct", adminController.store);


module.exports = router;