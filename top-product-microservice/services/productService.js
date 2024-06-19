const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const { TEST_SERVER_BASE_URL, COMPANIES } = require('../config/config');
const apiUtils = require('../utils/apiUtils');

const getTopProducts = async (categoryName, topN, pageNumber, minPrice, maxPrice, sortBy, order) => {
  const products = [];

  for (const company of COMPANIES) {
    const response = await axios.get(`${TEST_SERVER_BASE_URL}/companies/${company}/categories/${categoryName}/products`, {
      params: { top: topN, minPrice, maxPrice }
    });

    const companyProducts = response.data.map(product => ({
      id: uuidv4(),
      ...product,
      company
    }));

    products.push(...companyProducts);
  }

  // Sort and paginate the products
  const sortedProducts = apiUtils.sortProducts(products, sortBy, order);
  const paginatedProducts = apiUtils.paginateProducts(sortedProducts, topN, pageNumber);

  return paginatedProducts;
};

const getProductDetails = async (categoryName, productId) => {
  for (const company of COMPANIES) {
    const response = await axios.get(`${TEST_SERVER_BASE_URL}/companies/${company}/categories/${categoryName}/products`);

    const product = response.data.find(p => p.id === productId);
    if (product) {
      return product;
    }
  }

  return null;
};

module.exports = {
  getTopProducts,
  getProductDetails
};