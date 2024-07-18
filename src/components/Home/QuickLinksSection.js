import React from 'react';
import { Link } from 'react-router-dom';
import './QuickLinksSection.css';

const QuickLinksSection = () => {
    return (
        <section className="quick-links">
            <h2>Quick Links</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/testimonials">Testimonials</Link>
                </li>
                <li>
                    <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                    <Link to="/how-it-works">How It Works</Link>
                </li>
                <li>
                    <Link to="/features">Features</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </section>
    );
};

export default QuickLinksSection;
