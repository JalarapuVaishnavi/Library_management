import React from 'react';
import { Link } from 'react-router-dom';
import './style/BookPage.css';

function BookPage() {
  return (
    <div className="book-page-container">
      <h1 className="book-page-header">Library System</h1>
      <div className="book-page-sections">
        <div className="section-card">
          <h3>Library Catalog</h3>
          <p>Search and view available library materials.</p>
          <Link to="/catalog">
            <button>Go to Library Catalog</button>
          </Link>
        </div>
        <div className="section-card">
          <h3>Resource Management</h3>
          <p>Add, update, and manage library resources.</p>
          <Link to="/resources">
            <button>Go to Resource Management</button>
          </Link>
        </div>
        <div className="section-card">
          <h3>User Borrowing History</h3>
          <p>Track and manage user borrowing history.</p>
          <Link to="/borrowing">
            <button>Go to Borrowing History</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookPage;
