import React from 'react';
import './WhyEduConnectSection.css';

const WhyEduConnectSection = () => {
    return (
        <section className="why-educonnect">
            <h2>Why eduConnect</h2>
            <p>
                We integrate Blockchain and AI to provide a secure, transparent, and personalized learning experience.
            </p>
            <ul>
                <li>AI-driven personalized learning paths</li>
                <li>Blockchain for secure certification and transparency</li>
                <li>
                    Seamless connection between employers and the job market through our Labor Management Information
                    System (LMIS)
                </li>
                <li>Real-time progress tracking and management</li>
            </ul>
            <a href="/pricing" className="try-us-button">
                Try Us
            </a>
        </section>
    );
};

export default WhyEduConnectSection;
