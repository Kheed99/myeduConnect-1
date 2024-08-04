import React from 'react';
import { Link } from 'react-router-dom';

const LMSLandingPage = () => {
    return (
        <div className="lms-landing">
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
    );
};

export default LMSLandingPage;
