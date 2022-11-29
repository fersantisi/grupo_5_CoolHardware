const express = require('express');
const router = express.Router();
const adminController = require("../controllers/adminController")

router.get('/', adminController.admin)

router.get('/manageProduct/:id', adminController.manage);
router.get('/manageProduct/edit/:id', adminController.edit);
router.put('/manageProduct/edit/:id', adminController.update);
router.delete('/manageProduct/delete/:id', adminController.destroy);

router.get("/createProduct", adminController.create);
router.post("/createProduct", adminController.store);



router.get("/userAdmin", adminController.users);

module.exports = router;