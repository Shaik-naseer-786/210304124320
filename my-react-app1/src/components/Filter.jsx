import React, { useState } from 'react';

const Filter = ({ setFilters }) => {
    const [category, setCategory] = useState('Laptop');
    const [company, setCompany] = useState('AMZ');
    const [rating, setRating] = useState('');
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(10000);

    const handleFilterChange = () => {
        setFilters({ category, company, rating, minPrice, maxPrice });
    };

    return (
        <div className="filter">
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
            <input type="text" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
            <input type="text" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
            <input type="number" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
            <input type="number" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
            <button onClick={handleFilterChange}>Apply Filters</button>
        </div>
    );
};

export default Filter;