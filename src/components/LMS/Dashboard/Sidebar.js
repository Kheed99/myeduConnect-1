import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <div className="sidebar">
                <div className="sidebar-logo">
                    <img src="/images/logo.png" alt="Logo" />
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li>
                            <Link to="/lms/dashboard">
                                <i className="fas fa-tachometer-alt"></i> Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/lms/dashboard/payment-info">
                                <i className="fas fa-credit-card"></i> Payment Info
                            </Link>
                        </li>
                        <li>
                            <Link to="/lms/dashboard/registration">
                                <i className="fas fa-user-edit"></i> Registration
                            </Link>
                        </li>
                        <li>
                            <Link to="/lms/dashboard/courses">
                                <i className="fas fa-book"></i> Courses
                            </Link>
                        </li>
                        <li>
                            <Link to="/lms/dashboard/drop-semester">
                                <i className="fas fa-times-circle"></i> Drop Semester
                            </Link>
                        </li>
                        <li>
                            <Link to="/lms/dashboard/results">
                                <i className="fas fa-chart-line"></i> Results
                            </Link>
                        </li>
                        <li>
                            <Link to="/lms/dashboard/notice">
                                <i className="fas fa-bell"></i> Notice
                            </Link>
                        </li>
                        <li>
                            <Link to="/lms/dashboard/schedule">
                                <i className="fas fa-calendar-alt"></i> Schedule
                            </Link>
                        </li>
                        <li>
                            <Link to="/logout">
                                <i className="fas fa-sign-out-alt"></i> Logout
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
