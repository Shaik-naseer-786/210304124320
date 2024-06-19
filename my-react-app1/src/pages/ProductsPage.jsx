import React, { useEffect, useState } from 'react';
import productService from '../services/productServices';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({ top: 10 });
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await productService.getAllProducts({ ...filters, page });
            setProducts(data);
        };

        fetchProducts();
    }, [filters, page]);

    return (
        <div>
            <h1>Products</h1>
            <Filter setFilters={setFilters} />
            <ProductList products={products} />
            <Pagination setPage={setPage} />
        </div>
    );
};

export default ProductsPage;