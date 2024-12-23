import React from 'react';
import { Link } from 'react-router-dom';
import './style/Styles.css';

function Header() {
  return (
    <header>
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
          <Link to="/adminlogin">
            <button>Admin</button>
          </Link>
        </div>
      </nav>
      
    </header>
    
  );
}

export default Header;
