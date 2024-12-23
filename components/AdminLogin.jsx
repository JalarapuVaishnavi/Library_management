// src/components/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/AdminLogin.css';

function AdminLogin({ setIsLoggedIn }) {
  const [username, setUsernameState] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example admin credentials
    const adminUsername = 'admin';
    const adminPassword = 'admin123';

    if (username === adminUsername && password === adminPassword) {
      setIsLoggedIn(true); // Set logged-in status to true
      navigate('/adminbook'); // Navigate to Admin Book Page
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-form">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsernameState(e.target.value)}
            required
          />
          
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="button-container">
            <button
              type="button"
              className="close-btn"
              onClick={() => navigate('/')}
            >
              Close
            </button>
            <button type="submit">Login</button>
          </div>

          {error && <div className="alert">{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
