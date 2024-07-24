import React from 'react';
import './LMS.css';

function LMS() {
  return (
    <div className="lms-container">
      <h2>Completed Courses</h2>
      <div className="courses-grid">
        <div className="course-card">
          <img src={`${process.env.PUBLIC_URL}/images/data_science.jpg`} alt="Data Science" className="course-image" />
          <div className="course-title">Data Science</div>
        </div>
        <div className="course-card">
          <img src={`${process.env.PUBLIC_URL}/images/python_programming.jpg`} alt="Python Programming" className="course-image" />
          <div className="course-title">Python Programming</div>
        </div>
        <div className="course-card">
          <img src={`${process.env.PUBLIC_URL}/images/machine_learning.jpg`} alt="Machine Learning" className="course-image" />
          <div className="course-title">Machine Learning</div>
        </div>
      </div>

      <h2>Enrolled Courses</h2>
      <div className="courses-grid">
        <div className="course-card">
          <img src={`${process.env.PUBLIC_URL}/images/mathematics.jpg`} alt="Mathematics" className="course-image" />
          <div className="course-title">Mathematics</div>
          <div className="progress-bar"><div className="progress" style={{ width: '50%' }}></div></div>
        </div>
        <div className="course-card">
          <img src={`${process.env.PUBLIC_URL}/images/business_pitching.jpg`} alt="Business Pitching" className="course-image" />
          <div className="course-title">Business Pitching</div>
          <div className="progress-bar"><div className="progress" style={{ width: '75%' }}></div></div>
        </div>
      </div>

      <h2>Recommended Courses</h2>
      <div className="courses-grid">
        <div className="course-card">
          <img src={`${process.env.PUBLIC_URL}/images/artificial_intelligence.jpg`} alt="Artificial Intelligence" className="course-image" />
          <div className="course-title">Artificial Intelligence</div>
          <p className="course-summary">Explore AI technologies and their applications.</p>
          <div className="course-price">$150</div>
        </div>
        <div className="course-card">
          <img src={`${process.env.PUBLIC_URL}/images/blockchain.jpg`} alt="Blockchain" className="course-image" />
          <div className="course-title">Blockchain</div>
          <p className="course-summary">Learn about blockchain technology and its impact.</p>
          <div className="course-price">$120</div>
        </div>
        <div className="course-card">
          <img src={`${process.env.PUBLIC_URL}/images/iot.jpg`} alt="Internet of Things" className="course-image" />
          <div className="course-title">Internet of Things</div>
          <p className="course-summary">Understand IoT and its innovative solutions.</p>
          <div className="course-price">$130</div>
        </div>
        <div className="course-card">
          <img src={`${process.env.PUBLIC_URL}/images/cybersecurity.jpg`} alt="Cybersecurity" className="course-image" />
          <div className="course-title">Cybersecurity</div>
          <p className="course-summary">Protect data and understand security protocols.</p>
          <div className="course-price">$140</div>
        </div>
      </div>
    </div>
  );
}

export default LMS;
