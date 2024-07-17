import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentDashboard.css';

const courses = [
  { title: 'Mathematics', price: 50, level: 'Beginner', institution: 'Institution A', tutor: 'Tutor A', completed: true },
  { title: 'Engineering Mathematics', price: 100, level: 'Intermediate', institution: 'Institution B', tutor: 'Tutor B', completed: false, progress: 75 },
  { title: 'Artificial Intelligence', price: 150, level: 'Advanced', institution: 'Institution C', tutor: 'Tutor C', completed: false, progress: 30 },
  // Add more courses as needed
];

const StudentDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({ price: '', level: '', institution: '', tutor: '' });
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!filter.price || course.price <= filter.price) &&
    (!filter.level || course.level === filter.level) &&
    (!filter.institution || course.institution === filter.institution) &&
    (!filter.tutor || course.tutor === filter.tutor)
  );

  const completedCourses = filteredCourses.filter((course) => course.completed);
  const enrolledCourses = filteredCourses.filter((course) => !course.completed);
  const recommendedCourses = filteredCourses.slice(0, 3); // Sample recommendation logic

  const handleEnrollClick = () => {
    navigate('/signup');
  };

  return (
    <div className="dashboard">
      <div className="search-bar">
        <input type="text" placeholder="Search for Courses..." value={searchTerm} onChange={handleSearchChange} />
        <div className="filters">
          <input type="number" name="price" placeholder="Max Price" value={filter.price} onChange={handleFilterChange} />
          <select name="level" value={filter.level} onChange={handleFilterChange}>
            <option value="">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <input type="text" name="institution" placeholder="Institution" value={filter.institution} onChange={handleFilterChange} />
          <input type="text" name="tutor" placeholder="Tutor" value={filter.tutor} onChange={handleFilterChange} />
        </div>
      </div>
      
      <section className="completed-courses">
        <h2>Completed Courses</h2>
        <div className="course-cards">
          {completedCourses.map((course, index) => (
            <div key={index} className="course-card">
              <h3>{course.title}</h3>
              <p>{course.institution}</p>
              <p>Tutor: {course.tutor}</p>
              <button onClick={handleEnrollClick}>Enroll</button>
            </div>
          ))}
        </div>
      </section>

      <section className="enrolled-courses">
        <h2>Currently Enrolled Courses</h2>
        <div className="course-cards">
          {enrolledCourses.map((course, index) => (
            <div key={index} className="course-card">
              <h3>{course.title}</h3>
              <p>{course.institution}</p>
              <p>Tutor: {course.tutor}</p>
              <p>Progress: {course.progress}%</p>
              <button onClick={handleEnrollClick}>Enroll</button>
            </div>
          ))}
        </div>
      </section>

      <section className="recommended-courses">
        <h2>Recommended Courses</h2>
        <div className="course-cards">
          {recommendedCourses.map((course, index) => (
            <div key={index} className="course-card">
              <h3>{course.title}</h3>
              <p>{course.institution}</p>
              <p>Tutor: {course.tutor}</p>
              <button onClick={handleEnrollClick}>Enroll</button>
            </div>
          ))}
        </div>
      </section>

      <section className="incentives">
        <h2>Incentives</h2>
        <p>Complete 3 Courses and get one for free!</p>
        <p>Earn badges for completing assignments and quizzes.</p>
      </section>

      <section className="badges-leaderboard">
        <h2>Badges & Leaderboard</h2>
        <div className="badges">
          <div className="badge">Badge 1</div>
          <div className="badge">Badge 2</div>
          <div className="badge">Badge 3</div>
        </div>
        <div className="leaderboard">
          <h3>Leaderboard</h3>
          <p>1. Student A</p>
          <p>2. Student B</p>
          <p>3. Student C</p>
        </div>
      </section>
    </div>
  );
};

export default StudentDashboard;
