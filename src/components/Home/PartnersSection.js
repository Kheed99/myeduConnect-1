import React from 'react';
import './PartnersSection.css';

const PartnersSection = () => {
    return (
        <section className="partners">
            <h2>Our Partners</h2>
            <div className="partner-logos">
                <img src="/images/partner1.png" alt="Partner 1" />
                <img src="/images/partner2.png" alt="Partner 2" />
                <img src="/images/partner3.png" alt="Partner 3" />
                <img src="/images/partner4.png" alt="Partner 4" />
            </div>
        </section>
    );
};

export default PartnersSection;
