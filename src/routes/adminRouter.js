const express = require('express');
const router = express.Router();
const adminController = require("../controllers/adminController")

router.get('/', adminController.admin)
router.get("/createProduct", adminController.create);
router.get("/userAdmin", adminController.users);


module.exports = router;