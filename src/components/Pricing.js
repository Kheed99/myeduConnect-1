import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing">
      <h1>Select a Plan</h1>
      <div className="plans">
        <div className="plan">
          <h2>BASIC</h2>
          <p>$10 / month</p>
          <button>Get Plan</button>
        </div>
        <div className="plan">
          <h2>STANDARD</h2>
          <p>$20 / month</p>
          <button>Get Plan</button>
        </div>
        <div className="plan">
          <h2>PREMIUM</h2>
          <p>$30 / month</p>
          <button>Get Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
