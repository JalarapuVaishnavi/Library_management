// UserBorrowingHistory.jsx
import React, { useState, useEffect } from 'react';

function UserBorrowingHistory() {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  // Fetch borrowed books from an API (or you can use a mock data)
  useEffect(() => {
    // Replace with your actual API call to fetch the user's borrowed books
    const fetchBorrowedBooks = async () => {
      try {
        const response = await fetch('/api/borrowed-books'); // Your API endpoint
        const data = await response.json();
        setBorrowedBooks(data);
      } catch (error) {
        console.error('Error fetching borrowed books:', error);
      }
    };

    fetchBorrowedBooks();
  }, []);

  return (
    <div>
      <h1>User Borrowing History</h1>
      <ul>
        {borrowedBooks.length > 0 ? (
          borrowedBooks.map((book, index) => (
            <li key={index}>
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))
        ) : (
          <p>No borrowed books yet.</p>
        )}
      </ul>
    </div>
  );
}

export default UserBorrowingHistory;
