import React from 'react';
import './Home.css';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import WhyEduConnectSection from './WhyEduConnectSection';
import HowItWorksSection from './HowItWorksSection';
import TestimonialsSection from './TestimonialsSection';
import PartnersSection from './PartnersSection';

const Home = () => {
    return (
        <div className="home">
            <HeroSection />
            <AboutSection />
            <FeaturesSection />
            <WhyEduConnectSection />
            <HowItWorksSection />
            <TestimonialsSection />
            <PartnersSection />
        </div>
    );
};

export default Home;
