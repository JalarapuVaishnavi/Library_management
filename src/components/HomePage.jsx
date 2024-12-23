import React from 'react';
import BookPage from './path-to-book-page/BookPage';  // Adjust the import path based on your folder structure

function HomePage() {
  return (
    <div>
      <h1>Welcome to Our Library</h1>
      <BookPage />  {/* Display BookPage on Home Page */}
    </div>
  );
}

export default HomePage;
