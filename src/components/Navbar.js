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
                <li>
                    <Link to="/">
                        <i className="fas fa-home"></i> Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <i className="fas fa-info-circle"></i> About Us
                    </Link>
                </li>
                <li>
                    <Link to="/courses">
                        <i className="fas fa-book"></i> Courses
                    </Link>
                </li>
                <li>
                    <Link to="/lms">
                        <i className="fas fa-chalkboard-teacher"></i> LMS
                    </Link>
                </li>
                <li>
                    <Link to="/lmis">
                        <i className="fas fa-tags"></i> LMIS
                    </Link>
                </li>
                <li>
                    <Link to="/pricing">
                        <i className="fas fa-tags"></i> Pricing
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <i className="fas fa-envelope"></i> Contact
                    </Link>
                </li>
            </ul>
            <div className="navbar-buttons">
                <Link to="/signup" className="signup-button">
                    <i className="fas fa-user-plus"></i> Sign Up
                </Link>
                <Link to="/login" className="login-button">
                    <i className="fas fa-sign-in-alt"></i> Login
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
