// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="eduConnect Logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/lms">LMS</Link></li>
        <li><Link to="/lmis">LMIS</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-buttons">
        <Link to="/signup" className="signup-button">Sign Up</Link>
        <Link to="/login" className="login-button">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
