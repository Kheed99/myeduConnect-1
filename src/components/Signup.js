// src/components/Signup.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import logo from '../images/logo.png'; // Adjust the path as needed

const countryCodes = [
  { code: '+1', country: 'United States' },
  { code: '+44', country: 'United Kingdom' },
  { code: '+91', country: 'India' },
  // Add more country codes as needed
];

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup-header">
        <img src={logo} alt="eduConnect Logo" className="logo" />
      </div>
      <h1>Sign Up</h1>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <label>Phone</label>
        <div className="phone-input">
          <select>
            {countryCodes.map((country) => (
              <option key={country.code} value={country.code}>
                {country.code} {country.country}
              </option>
            ))}
          </select>
          <input type="tel" placeholder="Phone number" />
        </div>

        <button type="submit">Sign Up</button>
      </form>
      <p>
        Have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
