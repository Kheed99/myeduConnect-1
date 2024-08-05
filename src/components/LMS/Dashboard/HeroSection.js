import React from 'react';
import './HeroSection.css';

const HeroSection = ({ title, subtitle, buttonText, buttonLink }) => {
    return (
        <div className="hero-section" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
            <div className="hero-content">
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <a href={buttonLink} className="cta-button">
                    {buttonText}
                </a>
            </div>
        </div>
    );
};

export default HeroSection;
