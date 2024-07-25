import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
    return (
        <section className="testimonials">
            <h2>What People Say About eduConnect</h2>
            <div className="testimonial-cards">
                <div className="testimonial-card">
                    <img src="../images/testimonial1.jpg" alt="Person 1" />
                    <p>"eduConnect has transformed the way I learn. The AI-powered platform is incredible!"</p>
                    <div className="social-media-icons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin-in"></i>
                    </div>
                </div>
                <div className="testimonial-card">
                    <img src="/images/testimonial2.jpg" alt="Person 2" />
                    <p>"The integration of Blockchain ensures that my certifications are secure and verifiable."</p>
                    <div className="social-media-icons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin-in"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
