import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/hero-background.jpg'})` }}>
            <div className="hero-content">
                <h1>Welcome to eduConnect</h1>
                <p>Your gateway to personalized, secure, and sustainable learning solutions.</p>
                <div className="cta-buttons">
                    <Link to="/signup" className="cta-button">
                        Get Started
                    </Link>
                    <Link to="/learn-more" className="cta-button secondary">
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
