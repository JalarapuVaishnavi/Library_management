// src/components/CatalogSearch.js
import React, { useState } from 'react';

const CatalogSearch = ({ resources }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredResources = resources.filter(resource =>
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search for books, journals, etc."
                value={searchTerm}
                onChange={handleSearch}
                className="form-control mb-3"
            />
            <h4>Search Results:</h4>
            <ul className="list-group">
                {filteredResources.length > 0 ? (
                    filteredResources.map((resource, index) => (
                        <li key={index} className="list-group-item">
                            <strong>{resource.title}</strong> by {resource.author} - {resource.type}
                        </li>
                    ))
                ) : (
                    <li className="list-group-item">No results found.</li>
                )}
            </ul>
        </div>
    );
};

export default CatalogSearch;