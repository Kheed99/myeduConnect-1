import React from 'react';
import './FeaturesSection.css';

const features = [
    {
        title: 'LMS',
        description: 'An AI-powered, interactive learning environment for students.',
        icon: '/images/lms-icon.png',
    },
    {
        title: 'LMIS',
        description:
            'The Labour Market Information System which allows organizations to tap into an infinite pool of the job market with enhanced search algorithms.',
        icon: '/images/lmis-icon.png',
    },
    {
        title: 'Course Management System',
        description: 'A platform which allows institutions and course creators to make and manage their courses.',
        icon: '/images/cms-icon.png',
    },
    {
        title: 'Progress Management System',
        description: 'Allows mentors, coaches, guardians, and parents to monitor the progress of their children.',
        icon: '/images/pms-icon.png',
    },
];

const FeaturesSection = () => {
    return (
        <section className="features-section">
            <h2>Features</h2>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <img src={feature.icon} alt={feature.title} className="feature-icon" />
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
