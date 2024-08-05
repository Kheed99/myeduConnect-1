import React from 'react';
import PartnersSection from '../Home/PartnersSection';
import HeroSection from './Dashboard/HeroSection';
import './LMSLandingPage.css';

const LMSLandingPage = () => {
    return (
        <div className="lms-page">
            <HeroSection
                title="Welcome to the LMS"
                subtitle="Your learning journey starts here. Explore courses and track your progress."
                buttonText="Explore Courses"
                buttonLink="/courses"
            />
            <div className="lms-content">
                <h2>Welcome to the Learning Management System (LMS)</h2>
                <p>Select an option to proceed:</p>
                <ul>
                    <li>
                        <a href="/lms/dashboard/overview">Course Overview</a>
                    </li>
                    <li>
                        <a href="/lms/dashboard/profile-settings">Profile Settings</a>
                    </li>
                </ul>
            </div>
            <PartnersSection />
        </div>
    );
};

export default LMSLandingPage;
