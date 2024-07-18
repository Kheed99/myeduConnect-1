import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import WhyEduConnectSection from './WhyEduConnectSection';
import HowItWorksSection from './HowItWorksSection';
import TestimonialsSection from './TestimonialsSection';
import PartnersSection from './PartnersSection';
import QuickLinksSection from './QuickLinksSection';
import Footer from '../Footer';

const Home = () => {
    return (
        <div className="home">
            <AboutSection />
            <FeaturesSection />
            <WhyEduConnectSection />
            <HowItWorksSection />
            <TestimonialsSection />
            <PartnersSection />
            <QuickLinksSection />
            <Footer />
        </div>
    );
};

export default Home;
