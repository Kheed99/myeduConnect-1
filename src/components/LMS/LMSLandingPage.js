import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Dashboard/Sidebar';
import PartnersSection from '../Home/PartnersSection';
import HeroSection from './Dashboard/HeroSection';
import './LMSLandingPage.css';

const LMSLandingPage = () => {
    return (
        <>
            <div className="lms-dashboard">
                <div className="sidebar-container">
                    <Sidebar />
                    <div className="lms-content">
                        <HeroSection
                            title="Welcome to the LMS"
                            subtitle="Your learning journey starts here. Explore courses and track your progress."
                            buttonText="Explore Courses"
                            buttonLink="/courses"
                        />
                        <div className="dashboard-main-content">
                            <h2>Welcome to the Learning Management System (LMS)</h2>
                            <p>Select an option to proceed:</p>
                            <ul>
                                <li>
                                    <Link to="/lms/dashboard/overview">Course Overview</Link>
                                </li>
                                <li>
                                    <Link to="/lms/dashboard/profile-settings">Profile Settings</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <PartnersSection className="partners-section" />
        </>
    );
};

export default LMSLandingPage;
