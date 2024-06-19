const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/categories/:categoryName/products', productsController.getTopProducts);
router.get('/categories/:categoryName/products/:productId', productsController.getProductDetails);

module.exports = router;