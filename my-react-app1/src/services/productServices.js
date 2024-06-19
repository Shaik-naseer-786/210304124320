import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test/companies/AMZ/categories/Laptop';

const productService = {
    getAllProducts: async (filters) => {
        try {
            const { minPrice = 1, maxPrice = 10000, top = 10, ...otherFilters } = filters;
            const response = await axios.get(`${BASE_URL}/products`, {
                params: { minPrice, maxPrice, top, ...otherFilters },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw new Error('Failed to fetch products');
        }
    },

    getProductDetails: async (productId) => {
        try {
            const response = await axios.get(`${BASE_URL}/products/${productId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching product details:', error);
            throw new Error('Failed to fetch product details');
        }
    },
};

export default productService;