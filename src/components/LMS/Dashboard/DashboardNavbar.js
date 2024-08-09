import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardNavbar.css';
import logo from '../../../images/logo.png';

const DashboardNavbar = () => {
    return (
        <nav className="dashboard-navbar">
            <div className="dashboard-navbar-logo">
                <Link to="/lms/dashboard">
                    <img src={logo} alt="eduConnect Logo" />
                </Link>
            </div>
            <div className="dashboard-navbar-actions">
                <input type="text" className="dashboard-navbar-search" placeholder="Search..." />
                <div className="dashboard-navbar-profile">
                    <i className="fas fa-user-circle profile-icon"></i>
                    <span>John Doe</span>
                </div>
                <div className="dashboard-navbar-menu">
                    <Link to="/">Home</Link>
                    <div className="dropdown">
                        <i className="fas fa-bars"></i>
                        <div className="dropdown-content">
                            <Link to="/about">About</Link>
                            <Link to="/courses">Courses</Link>
                            <Link to="/lmis">LMIS</Link>
                            <Link to="/pricing">Pricing</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default DashboardNavbar;
