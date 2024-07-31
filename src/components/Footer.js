import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <div className="footer-background">
            <div className="footer-container">
                <div className="footer-about-us">
                    <h2>About Us</h2>
                    <p>
                        EduConnect is a revolutionary online learning platform that aims to provide personalized,
                        secure, and sustainable learning solutions to learners worldwide. Our platform leverages
                        cutting-edge technologies such as artificial intelligence and blockchain to create an engaging
                        and transparent learning environment.
                    </p>
                    <div className="social-media-icons">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-github"></i>
                        <i className="fab fa-dribbble"></i>
                        <i className="fab fa-pinterest"></i>
                    </div>
                </div>

                <div className="information-link">
                    <h2>Information Link</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/pricing">Pricing</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="contact-details">
                    <h2>Contact Details</h2>
                    <p>pulsarionitsolutions@gmail.com</p>
                    <p>Lusaka, Zambia</p>
                    <p>0777342846</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
