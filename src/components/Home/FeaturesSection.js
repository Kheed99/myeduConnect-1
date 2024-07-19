import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
    return (
        <section className="features">
            <h2>Features</h2>
            <div className="feature-cards">
                <div className="feature-card">
                    <h3>LMS</h3>
                    <p>An AI-powered, interactive learning environment for students.</p>
                </div>
                <div className="feature-card">
                    <h3>LMIS</h3>
                    <p>
                        The Labour Market Information System which allows organizations to tap into an infinite pool of
                        the job market with enhanced search algorithms.
                    </p>
                </div>
                <div className="feature-card">
                    <h3>Course Management System</h3>
                    <p>A platform which allows institutions and course creators to make and manage their courses.</p>
                </div>
                <div className="feature-card">
                    <h3>Progress Management System</h3>
                    <p>Allows mentors, coaches, guardians, and parents to monitor the progress of their children.</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
