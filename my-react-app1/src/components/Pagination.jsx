import React from 'react';

const Pagination = ({ setPage }) => {
    return (
        <div className="pagination">
            <button onClick={() => setPage(prev => Math.max(prev - 1, 1))}>Previous</button>
            <button onClick={() => setPage(prev => prev + 1)}>Next</button>
        </div>
    );
};

export default Pagination;