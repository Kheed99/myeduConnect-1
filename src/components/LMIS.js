import React from 'react';
import './LMS.css';

const LMS = () => {
  return (
    <div className="lms">
      <section className="enrolled-courses">
        <h2>Enrolled Courses</h2>
        {/* List enrolled courses here */}
      </section>

      <section className="available-courses">
        <h2>Available Courses</h2>
        {/* List available courses here */}
      </section>

      <section className="newest-courses">
        <h2>Newest Courses</h2>
        {/* Display four newest courses here */}
      </section>

      <section className="recommended-courses">
        <h2>Recommended Courses</h2>
        {/* List recommended courses here */}
      </section>
    </div>
  );
};

export default LMS;
