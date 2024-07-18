// components/Home/TestimonialsSection.js
import React from 'react';
import './TestimonialsSection.css'; // Create a separate CSS file for styling this component

const TestimonialsSection = () => {
    return (
        <section className="testimonials">
            <h2>What People Say About eduConnect</h2>
            <div className="testimonial-cards">
                <div className="testimonial-card">
                    <img src="../images/testimonial1.jpg" alt="Person 1" />
                    <p>"eduConnect has transformed the way I learn. The AI-powered platform is incredible!"</p>
                    <div className="social-media-icons">
                        <img src="/images/facebook-icon.png" alt="Facebook" />
                        <img src="/images/twitter-icon.png" alt="Twitter" />
                        <img src="/images/linkedin-icon.png" alt="LinkedIn" />
                    </div>
                </div>
                <div className="testimonial-card">
                    <img src="/images/testimonial2.jpg" alt="Person 2" />
                    <p>"The integration of Blockchain ensures that my certifications are secure and verifiable."</p>
                    <div className="social-media-icons">
                        <img src="/images/facebook-icon.png" alt="Facebook" />
                        <img src="/images/twitter-icon.png" alt="Twitter" />
                        <img src="/images/linkedin-icon.png" alt="LinkedIn" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
