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
                        <span className="icon-text">
                            <i className="fas fa-home"></i> Home
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <span className="icon-text">
                            <i className="fas fa-info-circle"></i> About Us
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/courses">
                        <span className="icon-text">
                            <i className="fas fa-book"></i> Courses
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/lms">
                        <span className="icon-text">
                            <i className="fas fa-chalkboard-teacher"></i> LMS
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/lmis">
                        <span className="icon-text">
                            <i className="fas fa-tags"></i> LMIS
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/pricing">
                        <span className="icon-text">
                            <i className="fas fa-tags"></i> Pricing
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <span className="icon-text">
                            <i className="fas fa-envelope"></i> Contact
                        </span>
                    </Link>
                </li>
            </ul>
            <div className="navbar-buttons">
                <Link to="/signup" className="signup-button">
                    <span className="icon-text">
                        <i className="fas fa-user-plus"></i> Sign Up
                    </span>
                </Link>
                <Link to="/login" className="login-button">
                    <span className="icon-text">
                        <i className="fas fa-sign-in-alt"></i> Login
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
