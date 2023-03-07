const express = require('express');
const router = express.Router();
const apiController = require("./apiController");

router.get("/products", apiController.products)
router.get("/categories", apiController.categories)
router.get("/brands", apiController.brands)
router.get("/users", apiController.users)
router.get("/admins", apiController.admins)

router.get("/categories/countProducts", apiController.categoryCount)
router.get("/brands/countProducts", apiController.brandCount)
router.get("/users/lastUser", apiController.lastUser)



module.exports = router;