import React, { useState } from 'react';
import './HowItWorksSection.css';

const steps = [
    {
        title: 'Step 1: Sign Up and Create Your Profile',
        description:
            'Get started by creating a personalized profile. Provide your learning preferences and goals to tailor the experience to your needs.',
    },
    {
        title: 'Step 2: Choose and Customize Your Learning Path',
        description:
            'Select from a variety of courses and modules. Customize your learning path to focus on the subjects that matter most to you.',
    },
    {
        title: 'Step 3: Engage with Interactive Lessons and Earn Rewards',
        description:
            'Participate in interactive lessons designed to keep you engaged. Earn rewards and badges as you complete tasks and achieve milestones.',
    },
    {
        title: 'Step 4: Track Your Progress and Access Secure Records',
        description:
            'Monitor your progress with detailed analytics and reports. Access your academic records securely through our blockchain technology.',
    },
];

const HowItWorksSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (currentIndex < steps.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <section className="how-it-works">
            <h2>How EduConnect Works</h2>
            <p className="subheading">
                Discover the seamless process of using EduConnect to enhance your learning journey.
            </p>
            <div className="timeline-container">
                <button
                    className={`arrow left-arrow ${currentIndex === 0 ? 'disabled' : ''}`}
                    onClick={handlePrevClick}
                    disabled={currentIndex === 0}>
                    &lt;
                </button>
                <div className="timeline-content">
                    {steps.map((step, index) => (
                        <div key={index} className={`timeline-step ${index % 2 === 0 ? 'above' : 'below'}`}>
                            <div className="step-card">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                            <div className="timeline-marker" />
                            {index < steps.length - 1 && <div className="timeline-connector" />}
                        </div>
                    ))}
                </div>
                <button
                    className={`arrow right-arrow ${currentIndex === steps.length - 1 ? 'disabled' : ''}`}
                    onClick={handleNextClick}
                    disabled={currentIndex === steps.length - 1}>
                    &gt;
                </button>
            </div>
        </section>
    );
};

export default HowItWorksSection;
