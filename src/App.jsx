// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'; // Import Axios for API calls
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import LibraryCatalog from './components/LibraryCatalog';
import ResourceManagement from './components/ResourceManagement';
import BorrowingHistory from './components/BorrowingHistory';
import BookPage from './components/BookPage';
import AdminBookPage from './components/AdminBookPage';
import AdminLogin from './components/AdminLogin';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to check if the user is authenticated
  const checkAuthStatus = async () => {
    try {
      const response = await axios.get('/api/auth/status'); // Adjust API endpoint as needed
      setIsLoggedIn(response.data.isLoggedIn);
    } catch (error) {
      console.error('Error checking auth status:', error);
      setIsLoggedIn(false);
    }
  };

  // Call checkAuthStatus when the component mounts
  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        {/* Homepage route */}
        <Route path="/" element={<BookPage />} />

        {/* Login route */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        {/* Admin Login route */}
        <Route path="/adminlogin" element={<AdminLogin setIsLoggedIn={setIsLoggedIn} />} />

        {/* Admin route */}
        <Route path="/adminbook" element={<AdminBookPage />} />

        {/* Other routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/catalog" element={<LibraryCatalog />} />
        <Route path="/resources" element={<ResourceManagement />} />
        <Route path="/borrowing" element={<BorrowingHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
