// src/components/Pricing.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing">
      <h1>Pricing Plans</h1>
      <div className="pricing-plans">
        <div className="pricing-plan">
          <h2>BASIC</h2>
          <p>$10 / month</p>
          <ul>
            <li>Access to all basic courses</li>
            <li>Community support</li>
            <li>Access to free resources</li>
            <li>Limited course completion certificates</li>
          </ul>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
        <div className="pricing-plan">
          <h2>STANDARD</h2>
          <p>$20 / month</p>
          <ul>
            <li>Access to all courses</li>
            <li>Priority support</li>
            <li>Exclusive webinars</li>
            <li>Course completion certificates</li>
            <li>Project-based learning</li>
          </ul>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
        <div className="pricing-plan">
          <h2>PREMIUM</h2>
          <p>$30 / month</p>
          <ul>
            <li>All courses & premium content</li>
            <li>24/7 support</li>
            <li>One-on-one mentoring</li>
            <li>Career services access</li>
            <li>Networking opportunities</li>
          </ul>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
