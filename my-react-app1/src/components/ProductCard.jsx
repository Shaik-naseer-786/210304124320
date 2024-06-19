import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src="https://via.placeholder.com/150" alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <Link to={`/products/${product.id}`}>View Details</Link>
        </div>
    );
};

export default ProductCard;