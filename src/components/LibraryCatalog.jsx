// LibraryCatalog.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link
import './style/LibraryCatalog.css';
import axios from 'axios';

function LibraryCatalog() {
  const [resources, setResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch books from the API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/api/resources'); // API to fetch resources
        setResources(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  // Filter resources based on the search term
  const filteredResources = resources.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="catalog-container">
      <h1>Library Catalog</h1>
      
      {/* Navigation Links */}
      <div className="catalog-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/borrowing" className="nav-link">User Borrowing History</Link>
      </div>

      <input
        type="text"
        placeholder="Search for books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button>Search</button>

      {/* Display filtered books */}
      <div className="resource-grid">
        {filteredResources.length > 0 ? (
          filteredResources.map((book) => (
            <div key={book.id} className="resource-item">
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <button>Order</button>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}

export default LibraryCatalog;
