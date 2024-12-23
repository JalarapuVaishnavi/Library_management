import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/Login.css'; // Import login styles

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login details:', { email, password });
    navigate('/'); // Redirect after successful login
  };

  const handleOverlayClick = (e) => {
    // Close the form if the user clicks on the overlay (not the form itself)
    if (e.target.classList.contains('popup-overlay')) {
      navigate('/');
    }
  };

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-content login-popup">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter password"
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
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
