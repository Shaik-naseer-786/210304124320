const productService = require('../services/productService');

const getTopProducts = async (req, res) => {
    const { categoryName } = req.params;
    const { n, page = 1, minPrice, maxPrice, sortBy, order } = req.query;
    const topN = parseInt(n, 10);
    const pageNumber = parseInt(page, 10);

    if (isNaN(topN) || topN <= 0) {
        return res.status(400).json({ error: 'Invalid value for n' });
    }

    try {
        const products = await productService.getTopProducts(categoryName, topN, pageNumber, minPrice, maxPrice, sortBy, order);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProductDetails = async (req, res) => {
    const { categoryName, productId } = req.params;

    try {
        const product = await productService.getProductDetails(categoryName, productId);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getTopProducts,
    getProductDetails
};